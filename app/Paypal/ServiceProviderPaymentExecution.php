<?php 
namespace App\Paypal;

use App\Models\User;
use App\Models\Order;
use App\Paypal\PaypalToken;
use Illuminate\Support\Facades\Auth;
use App\Models\PaypalPaymentCreation;
use App\Models\Wallet;

class ServiceProviderPaymentExecution
{
    public $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function processing()
    {
        
        $request = $this->request;
        
        $orderData = Order::find($request->order_id);

        $userId = $orderData->user_id;        

        $token = $token = PaypalToken::generate($userId);

        $payloadData = '{
        "payer_id": "'.$request->PayerID.'"
        }';

        $paymentId = $request->paymentId;
        $ch = curl_init("https://api-m.sandbox.paypal.com/v1/payments/payment/{$paymentId}/execute");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type: application/json",
        "Authorization: Bearer {$token['access_token']}"
        ));
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($ch, CURLOPT_POSTFIELDS, $payloadData);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        
        $result = curl_exec($ch);
        $array = json_decode($result, true); 
        $httpStatusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);


 
            PaypalPaymentCreation::where('order_id', $request->order_id)->update(['payment_status' => 2]);

            $order = Order::find($request->order_id);

           Wallet::create([
                'order_id' => $request->order_id,
               'user_id'   => $userId,
                'amount'   => $order->amount
           ]);

            Order::find($request->order_id)->update(
                [
                   
                    'payment_status' => 1,
                    'payment_type' => 2,
                ]
            );
        
        
        return response()->json([
            'status' => 200,
            'message' => 'Company Payment Transaction has been succeed!'
        ]);
    }
}
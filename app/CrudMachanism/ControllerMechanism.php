<?php 
namespace App\CrudMachanism;


use App\SearchEngine\DataMachine;
use App\CrudMachanism\DataShowing;
use App\CrudMachanism\DataDeletion;
use App\CrudMachanism\DataInsertion;
use Illuminate\Http\Request;

class ControllerMechanism
{

    public $modelClass;
    public $resourceClass;
    public $requestClass;
    public $request;
    public $insertableData = [];
    public $searchable = [];
    public $extraData = [];

    public function __construct($modelClass, $requestClass, $resourceClass, $request, $searchable, $extraData)
    {
        $this->modelClass    = $modelClass;
        $this->resourceClass = $resourceClass;
        $this->requestClass  = $requestClass;
        $this->request       = $request;
        $this->searchable    = $searchable;
        $this->extraData     = $extraData;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchable = [
            'title',
        ];
        
        $extraData = [];
        
        $result = new DataMachine($searchable, $request, $this->modelClass::class, $this->resourceClass::class, $extraData);
        return  $result->dataRendering();
    }

    public function storeUpdate($request, $id, $method)
    { 

        $options      = FileUpload::setOptions($id, $this->modelClass::class, $method, 'image', 'uploads/post');
        $file         = new FileUpload($request, $options);
        $fileName     = $file->imgProcess();

        $optionsIcon  = FileUpload::setOptions($id, $this->modelClass::class, $method, 'feature_image', 'uploads/post');
        $fileIcon     = new FileUpload($request, $optionsIcon);
        $fileNameIcon = $fileIcon->imgProcess();

       

      $data = $request->except([
        'image',
        'feature_image',
      ]);

      $data['slug']          = strtolower(str_replace(' ', '-',$request->name));
      $data['image']         = $fileName;
      $data['feature_image'] = $fileNameIcon;
      $operation             = new DataInsertion($this->modelClass::class, $method, 'post', $data, $id);
      $result                = $operation->crudItem();
     
      return $result;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store($this->requestClass $request)
    // {
    //     $result =  $this->storeUpdate($request,'', 'store');
    //     return $result;
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DataShowing::dataShow(Post::class, $id, PostResource::class);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $result =  $this->storeUpdate($request, $id, 'update');
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result =  DataDeletion::dataDelete(Post::class, $id, 'post');
        return $result;
    }

}

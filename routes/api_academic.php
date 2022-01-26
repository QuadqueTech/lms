<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'API\Academic', 'middleware' => 'api'], function(){

    // Route::post('signup', 'AuthController@signUp');
    Route::post('signin', 'AuthController@signIn');
    Route::post('signout', 'AuthController@signOut');

});

Route::group(['namespace' => 'API\Academic', 'middleware' => 'auth:sanctum'], function(){

  Route::apiResources([

    'course-category' => 'CourseCategoryController'

  ]);

});

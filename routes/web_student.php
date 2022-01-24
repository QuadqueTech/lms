<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['namespace' => 'Backend\Student'], function(){

    Route::get('/student', 'HomeController@index');
    Route::get('/student/{path}', 'HomeController@index')->where('path','([A-z\d\-\/_.]+)?');
  
});

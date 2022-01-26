<?php

namespace App\Http\Controllers\API\Backend\Academic;

use App\Uploads\FileUpload;
use Illuminate\Http\Request;
use App\SearchEngine\DataMachine;
use App\CrudMachanism\DataShowing;
use App\CrudMachanism\DataDeletion;
use App\CrudMachanism\DataInsertion;
use App\Http\Controllers\Controller;
use App\Models\Academic\CourseCategory;
use App\Http\Requests\Academic\CourseCategoryRequest;
use App\Http\Resources\Academic\CourseCategoryResource;

class CourseCategoryController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchable = ['name'];
        $extraData = [];
        $result = new DataMachine($searchable, $request, CourseCategory::class, CourseCategoryResource::class, $extraData);
        return  $result->dataRendering();
    }

    public function storeUpdate($request, $id, $method)
    {         
        $options           = FileUpload::setOptions($id, CourseCategory::class, $method, 'thumbnail', 'uploads/course-category');
        $file              = new FileUpload($request, $options);
        $fileName          = $file->imgProcess();     
          
        $data              = $request->except(['thumbnail']);
        $data['slug']      = strtolower(str_replace(' ', '_',$request->name));
        $data['thumbnail'] = $fileName;
        $operation         = new DataInsertion(CourseCategory::class, $method, 'Course Category', $data, $id);
        $result            = $operation->crudItem();   
        return $result;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CourseCategoryRequest $request)
    {
        $result =  $this->storeUpdate($request,'', 'store');
        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DataShowing::dataShow(CourseCategory::class, $id, CourseCategoryResource::class);
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
        $result =  DataDeletion::dataDelete(CourseCategory::class, $id, 'Course Category');
        return $result;
    }
}

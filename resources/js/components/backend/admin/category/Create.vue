<template>
 <div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5>Service Provider</h5>  
        </div>
        <div class="card-body">
          <form class="needs-validation form" novalidate="" @submit.prevent="processData()">
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Name</label>     
                <input class="form-control" type="text" name="name" v-model="state.inputData.name" placeholder="e.g. Jone Doe" required="">
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Slug</label>     
                <input class="form-control" type="text" name="slug" v-model="state.inputData.slug" placeholder="e.g. jone@gmail.com" required="">
              </div>
             </div>
             <div class="form-row">
               <div class="col-md-6 mb-3">
                <label for="validationCustom02">Thumbnail</label> 
                <input class="form-control" type="file" name="thumbnail" placeholder="">
              </div>
            
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Description</label> 
                <textarea class="form-control" type="text" name="description" v-model="state.inputData.description" placeholder="Write about you..."></textarea>
              </div>
            </div>
            <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
            <FormButton :isEdit="state.isEdit" :backUrl="state.backUrl"></FormButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import useCreate from '../../../../src/composable/use-create'

export default {
   setup(){
     let {processData, editForm, state} = useCreate()
 
    state.generalApi = 'course-category'
    state.backUrl = '/course-category'

    console.log('inputData', state.inputData);
    
    return{

      processData,
      editForm,
      state,
    }
   }
   
}
</script>
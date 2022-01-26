<template>
    <div class="row mb-32pt">
        <div class="col-lg-12 d-flex align-items-center">
            <div class="flex"
                    style="max-width: 100%">

                <div class="was-validated">
                    <div class="form-row">
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label"
                                    for="validationSample01">Name</label>
                            <input type="text"
                                    class="form-control"
                                    id="validationSample01"
                                    placeholder="First name"
                                    required="">
                            <!-- <div class="invalid-feedback">Please provide a first name.</div>
                            <div class="valid-feedback">Looks good!</div> -->
                        </div>
                        
                    </div>
                    <div class="form-row">
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label"
                                    for="validationSample01">Name</label>
                            <input type="text"
                                    class="form-control"
                                    id="validationSample01"
                                    placeholder="First name"
                                    required="">
                            <!-- <div class="invalid-feedback">Please provide a first name.</div>
                            <div class="valid-feedback">Looks good!</div> -->
                        </div>
                        
                    </div>
                    <div class="form-row">
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label"
                                    for="validationSample01">Slug</label>
                            <input type="text"
                                    class="form-control"
                                    id="validationSample01"
                                    placeholder="First name"
                                    required="">
                            <!-- <div class="invalid-feedback">Please provide a first name.</div>
                            <div class="valid-feedback">Looks good!</div> -->
                        </div>
                        
                    </div>
                    <div class="form-row">
                         <div class="row mb-32pt">
                        <div class="col-lg-4">
                            <div class="page-separator">
                                <div class="page-separator__text">Rich Text Editor</div>
                            </div>
                            <p class="card-subtitle text-70 mb-16pt mb-lg-0">Powerful WYSIWYG text editor powered by Quill. Please read the <a href="https://quilljs.com/"
                                   target="_blank">official plugin documentation</a> for a full list of options.</p>
                        </div>
                        <div class="col-lg-8 d-flex align-items-center">
                            <div class="flex"
                                 style="max-width: 100%">

                                <label class="form-label">Default</label>
                                <div style="height: 150px;"
                                     data-toggle="quill"
                                     data-quill-placeholder="Quill WYSIWYG editor">
                                    <h1>Hello World!</h1>
                                    <p>Some initial <strong>bold</strong> text</p>
                                    <p><br></p>
                                </div>

                                <label class="form-label">Custom toolbar</label>
                                <div style="height: 150px;"
                                     data-toggle="quill"
                                     data-quill-placeholder="Quill WYSIWYG editor"
                                     data-quill-modules-toolbar='[["bold", "italic"], ["link", "blockquote", "code", "image"], [{"list": "ordered"}, {"list": "bullet"}]]'>
                                    <p>Hello World!</p>
                                    <p>Some initial <strong>bold</strong> text</p>
                                    <p><br></p>
                                </div>

                            </div>
                        </div>
                    </div>
                        
                    </div>
                    
                </div>
                
                <button class="btn btn-primary"
                        type="submit">Submit</button>

            </div>
        </div>
    </div>
</template>
<template>
<section class="min-vh-100 d-flex bg-primary align-items-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col justify-content-center">
        <div class="card bg-primary shadow-soft border-light p-4">
          <div class="card-header text-center pb-0">
            <h2 class="h2">Upload PDFs</h2>

          </div>
          <div class="card-body">
            <form action="#">
              <div class="form-group">
                <div class="input-group mb-4">
                  <input type="file" class="form-control-file" multiple="multiple" />
                </div>
                <h6><span class="fas fa-file-alt"></span> 生物学基礎論(木村)2020レポート.pdf</h6>
              </div>
              <div class="form-row align-items-center">
                <div class="form-group col-3">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span class="fas fa-chalkboard"></span></span>
                    </div>
                    <input class="form-control" type="text">
                  </div>
                </div>

                <div class="form-group col-3">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span class="fas fa-user"></span></span>
                    </div>
                    <input class="form-control" type="text">
                  </div>
                </div>

                <div class="form-group col-3">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span class="far fa-calendar-alt"></span></span>
                    </div>
                    <input class="form-control" type="text">
                  </div>
                </div>

                <div class="form-group col-3">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><span class="fas fa-paperclip"></span></span>
                    </div>
                    <input class="form-control" type="text">
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button type="submit" class="btn text-center">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</section>
</template>

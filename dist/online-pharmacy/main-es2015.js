(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-add-pharm/admin-add-pharm.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-add-pharm/admin-add-pharm.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <mdb-card>\n\n    <mdb-card-header class=\"info-color white-text text-center py-4\">\n      <h5>\n        <strong>Add new Pharm</strong>\n      </h5>\n    </mdb-card-header>\n\n    <!--Card content-->\n    <mdb-card-body class=\"px-lg-5 pt-0\">\n\n\n      <form [formGroup]=\"form\" (submit)=\"onSave()\">\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <div class=\"md-form\">\n              <input type=\"text\" id=\"materialRegisterFormFirstName\" formControlName=\"name\" class=\"form-control\"\n                mdbInput>\n              <label for=\"materialRegisterFormFirstName\">First name</label>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <!-- Last name -->\n            <div class=\"md-form\">\n              <input type=\"number\" formControlName=\"price\" id=\"materialRegisterFormLastName\" class=\"form-control\"\n                mdbInput>\n              <label for=\"materialRegisterFormLastName\">Price</label>\n            </div>\n          </div>\n\n          <div class=\"col\">\n              <!-- Last name -->\n              <div class=\"md-form\">\n                <input type=\"number\" formControlName=\"rate\" id=\"materialRegisterFormRate\" class=\"form-control\"\n                  mdbInput>\n                <label for=\"materialRegisterFormLastName\">Rate </label>\n              </div>\n            </div>\n\n\n\n\n        </div>\n\n\n        <div>\n            <button mdbBtn gradient=\"blue\" rounded=\"true\" type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\n            <input type=\"file\" #filePicker name=\"image\" (change)=\"onInputChange($event)\">\n          </div>\n          <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n            <img width=\"300px\" [src]=\"imagePreview\" [alt]=\"form.value.title\">\n          </div>\n\n        <!--                              aaaaaaaaaaaaaaaaaaaaaaaaaa  -->\n        <div class=\"md-form\">\n          <input type=\"text\" formControlName=\"sort\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput>\n          <label for=\"materialRegisterFormLastName\">O'zbekcha ma'lumot</label>\n        </div>\n        <div class=\"md-form\">\n          <input type=\"text\" formControlName=\"sort1\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput>\n          <label for=\"materialRegisterFormLastName\">Русская информатция</label>\n        </div>\n        <div class=\"md-form\">\n          <input type=\"text\" formControlName=\"sort2\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput>\n          <label for=\"materialRegisterFormLastName\">Узбекча малумот</label>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"col\">\n        <div class=\"md-form\">         \n                     <select (ngModel)=\"roomy\" formControlName=\"roomy\"  placeholder=\"Enter Category\" class=\"browser-default custom-select\" name=\"category\" id=\"category\">\n                       <option value=\"{{cat.name}}\"  *ngFor = \"let cat of categorys\" >{{cat.name}}</option>\n                     </select>\n          <!-- <input type=\"text\" formControlName=\"roomy\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput>\n          <label for=\"materialRegisterFormLastName\">Roomy</label> -->\n        </div>\n        </div>\n        <div class=\"col\">\n          \n            <div class=\"md-form\">\n                <input type=\"number\" formControlName=\"sale\" id=\"materialRegisterFormLastName\" class=\"form-control\" mdbInput>\n                <label for=\"materialRegisterFormLastName\">Sale</label>\n              </div>\n        </div>\n\n        </div>\n \n        <!-- <input  class=\"form-control\" type=\"text\" formControlName=\"name\" placeholder=\"Post Title\"  mdbInput> -->\n\n        <div class=\"md-form\">\n          <textarea type=\"text\" formControlName=\"inform\" id=\"materialContactFormMessage\" class=\"form-control md-textarea\" mdbInput></textarea>\n          <label for=\"materialContactFormMessage\">Kommentariya</label>\n        </div>\n\n        <!-- <textarea rows=\"4\"  formControlName=\"price\" placeholder=\"Post Content\"></textarea> -->\n\n        <button mdbBtn gradient=\"success\" type=\"submit\">Save Pharm</button>\n        <a routerLink=\"/admin/pharms\">All Pharms</a>\n      </form>\n\n      <!-- Material form register -->\n\n\n\n\n\n\n\n\n\n\n    </mdb-card-body>\n\n  </mdb-card>\n  <!-- Material form register -->\n\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-category/admin-category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-category/admin-category.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <h1 class=\"h3 mb-2 text-gray-800\">Categories</h1>\n  <p class=\"mb-4\">DataTables is a third party plugin that is used to generate the demo table below. For more information\n    about DataTables, please visit the <a target=\"_blank\" href=\"https://datatables.net\">official DataTables\n      documentation</a>.</p>\n \n\n      <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3\">\n              <h6 class=\"m-0 font-weight-bold text-primary\">Add new Category</h6>\n            </div>\n        <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"md-form\">\n                <input type=\"text\"  #name class=\"form-control\"\n                mdbInput>\n              <label for=\"materialRegisterFormFirstName\">CategoryName</label>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-auto\">\n                <div class=\"md-form\">\n                <input type=\"number\" #id  class=\"form-control\"\n                mdbInput>\n              <label for=\"materialRegisterFormLastName\">ID</label>\n              </div>\n            </div>\n            <div class=\"col col-lg-2\">\n                <div class=\"md-form\">\n                <button mdbBtn type=\"button\" color=\"success\" (click)=\"add(name.value, id.value)\" outline=\"true\" mdbWavesEffect>Add</button>\n                </div>\n            </div>\n          </div>\n          </div>\n          </div>\n\n\n  <!-- DataTales Example -->\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <h6 class=\"m-0 font-weight-bold text-primary\">DataTables Example</h6>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>CategoryID</th>\n              <th>CategoryName</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          \n            <tr *ngFor =\"let cat of category\">\n              <th>{{cat.id}}</th>\n              <th>{{cat.name}}</th>\n              <th> <button mdbBtn type=\"button\" color=\"danger\" (click) = \"deleteCategory(cat._id)\" outline=\"true\" mdbWavesEffect>Delete</button>  </th>\n            </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-home/admin-home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-home/admin-home.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n    <h1 class=\"h3 mb-0 text-gray-800\">Statistika</h1>\n    <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a>\n  </div>\n\n  <!-- Content Row -->\n  <div class=\"row\">\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-primary shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Buyurtmalar</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\"> {{q}}  ta </div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-success shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Umumiy dorilar</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{a}}  ta</div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-info shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Tasks</div>\n              <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto\">\n                  <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">50%</div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"progress progress-sm mr-2\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pending Requests Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-warning shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Obunachilar</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{c}}</div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Content Row -->\n\n  <div class=\"row\">\n\n     \n  </div>\n\n  <!-- Content Row -->\n  <div class=\"row\">\n\n    <!-- Content Column -->\n    <div class=\"col-lg-6 mb-4\">\n\n      <!-- Project Card Example -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Projects</h6>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"small font-weight-bold\">Server Migration <span class=\"float-right\">20%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Sales Tracking <span class=\"float-right\">40%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Customer Database <span class=\"float-right\">60%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Payout Details <span class=\"float-right\">80%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Account Setup <span class=\"float-right\">Complete!</span></h4>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Color System -->\n      <div class=\"row\">\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-primary text-white shadow\">\n            <div class=\"card-body\">\n              Primary\n              <div class=\"text-white-50 small\">#4e73df</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-success text-white shadow\">\n            <div class=\"card-body\">\n              Success\n              <div class=\"text-white-50 small\">#1cc88a</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-info text-white shadow\">\n            <div class=\"card-body\">\n              Info\n              <div class=\"text-white-50 small\">#36b9cc</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-warning text-white shadow\">\n            <div class=\"card-body\">\n              Warning\n              <div class=\"text-white-50 small\">#f6c23e</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-danger text-white shadow\">\n            <div class=\"card-body\">\n              Danger\n              <div class=\"text-white-50 small\">#e74a3b</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-secondary text-white shadow\">\n            <div class=\"card-body\">\n              Secondary\n              <div class=\"text-white-50 small\">#858796</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-6 mb-4\">\n\n      <!-- Illustrations -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Kasb haqida</h6>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"text-center\">\n            <img class=\"img-fluid px-3 px-sm-4 mt-3 mb-4\" style=\"width: 25rem;\" src=\"assets/admin/img/medical.svg\" alt=\"\">\n          </div>\n          <p>Add some quality, svg illustrations to your project courtesy of <a target=\"_blank\" rel=\"nofollow\" href=\"https://undraw.co/\">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>\n          <a target=\"_blank\" rel=\"nofollow\" href=\"https://undraw.co/\">Browse Illustrations on unDraw &rarr;</a>\n        </div>\n      </div>\n\n      <!-- Approach -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Development Approach</h6>\n        </div>\n        <div class=\"card-body\">\n          <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>\n          <p class=\"mb-0\">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>\n        </div>\n      </div>\n\n      \n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-login/admin-login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-login/admin-login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n  <div class=\"container\">\n    \n      <div class=\"row\">\n        <div class=\"col-sm\">\n          \n        </div>\n        <div class=\"col-sm\">\n            <mdb-card>\n\n                <mdb-card-header class=\"info-color white-text text-center py-4\">\n                  <h5>\n                    <strong> \n                      <mdb-icon fas icon=\"user-tie\"></mdb-icon> \n                      \n                      Admin</strong>\n                  </h5>\n                </mdb-card-header>\n                <mdb-card-body class=\"px-lg-5 pt-0\">\n                  <form class=\"text-center\" style=\"color: #757575;\">\n                    <div class=\"md-form\">\n                      <input type=\"text\" #login class=\"form-control\" mdbInput>\n                      <label for=\"materialLoginFormEmail\"><mdb-icon fas icon=\"door-open\"></mdb-icon> Login</label>\n                    </div>\n                    <div class=\"md-form\">\n                      <input type=\"password\" #password  class=\"form-control\" mdbInput>\n                      <label for=\"materialLoginFormPassword\"><mdb-icon fas icon=\"key\"></mdb-icon> Password</label>\n                    </div>\n                    <div class=\"d-flex justify-content-around\">\n                      <div>\n                        <mdb-checkbox>Remember me</mdb-checkbox>\n                      </div>\n                    </div>\n              \n                    <button  (click)=\"signIn(login.value, password.value)\" mdbBtn color=\"info\" outline=\"true\" rounded=\"true\" block=\"true\" class=\"my-4 waves-effect z-depth-0\" mdbWavesEffect\n                      >Sign in</button>\n                    \n                  </form>\n                </mdb-card-body>\n              </mdb-card>\n        </div>\n        <div class=\"col-sm\">\n          \n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-moderators/admin-moderators.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-moderators/admin-moderators.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <h1 class=\"h3 mb-2 text-gray-800\">All Pharms</h1>\n    <p class=\"mb-4\">DataTables is a third party plugin that is used to generate \n      the demo table below. For more information about DataTables, please visit the official \n      DataTables documentation.</p>\n\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Add new Moderator</h6>\n          </div>\n      <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col\">\n              <div class=\"md-form\">\n              <input type=\"text\"  #login class=\"form-control\"\n              mdbInput>\n            <label for=\"materialRegisterFormFirstName\">Login</label>\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"md-form\">\n            <input type=\"password\"  #pass class=\"form-control\"\n            mdbInput>\n          <label for=\"materialRegisterFormFirstName\">Password</label>\n          </div>\n        </div>\n          <div class=\"col-12 col-md-auto\">\n              <div class=\"md-form\">\n              <input type=\"email\" #email  class=\"form-control\"\n              mdbInput>\n            <label for=\"materialRegisterFormLastName\">Email</label>\n            </div>\n          </div>\n          <div class=\"col col-lg-2\">\n              <div class=\"md-form\">\n              <button mdbBtn type=\"button\" color=\"success\"\n              (click)=\"add(login.value, pass.value, email.value)\"\n              \n              outline=\"true\" mdbWavesEffect>Add</button>\n              </div>\n          </div>\n        </div>\n        </div>\n        </div>\n\n    <!-- DataTales Example -->\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">All Moderators</h6>\n          </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n            <thead>\n              <tr>\n                <th>Login</th>\n                <th>Email</th>\n                <th>Delete</th>\n              </tr>\n            </thead>\n            <tfoot>\n              <tr *ngFor= \"let moderator of moderators\">\n                <th>{{moderator.login}}</th>\n                <th>{{moderator.email}}</th>\n                <th> <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" (click)=\"delete(moderator._id)\" mdbWavesEffect>Delete</button></th>\n            </tfoot>\n          </table>\n \n\n        </div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders-success/admin-orders-success.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-orders-success/admin-orders-success.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <h1 class=\"h3 mb-2 text-gray-800\">Muvaffaqiyatli tugagan buyurtmalar</h1>\n    <p class=\"mb-4\">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target=\"_blank\" href=\"https://datatables.net\">official DataTables documentation</a>.</p>\n    \n    <!-- DataTales Example -->\n    <div class=\"card shadow mb-4\">\n      <div class=\"card-header py-3\">\n        <h6 class=\"m-0 font-weight-bold text-primary\">DataTables Example</h6>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Tel. Number</th>\n                <th>Dorilar va soni</th>\n                <th>Umumiy summa</th>\n                <th>Vaqt</th>\n                <th>To'lov turi </th>\n                <th>Carta raqami</th>\n                <th>Yetkazib berish turi</th>\n                <th>Manzil</th>\n                <th>Status</th>\n                <th>O'chirish</th>\n              </tr>\n            </thead>\n            <tfoot>\n              <tr *ngFor= \"let order of orders, let i=index\">\n                <th>{{i+1}}</th>\n                <th>{{order.telnumber}}</th>\n                <th><p *ngFor = \"let pharm of pharms[i], let j=index\">\n                  <b>{{pharm.name}}</b> dan <b>{{rate[i][j]}}</b> ta </p><br></th>\n                <th>{{order.rate}}</th>\n                <th>{{order.date}}</th>\n                <th>{{order.payType}} </th>\n                <th>{{order.scoreNumber}}</th>\n                <th>{{order.forward}}</th>\n                <th>{{order.address}}</th>\n                <th style=\"color: green\">{{order.status}}</th>\n                <th><button (click)=\"delete(order._id)\" ><mdb-icon size=\"2x\" class=\"red-text pr-3\" fas icon=\"trash\"></mdb-icon></button></th>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders/admin-orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-orders/admin-orders.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <h1 class=\"h3 mb-2 text-gray-800\">Barcha buyurtmalar</h1>\n    <p class=\"mb-4\">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target=\"_blank\" href=\"https://datatables.net\">official DataTables documentation</a>.</p>\n    \n    <!-- DataTales Example -->\n    <div class=\"card shadow mb-4\">\n      <div class=\"card-header py-3\">\n        <h6 class=\"m-0 font-weight-bold text-primary\">DataTables Example</h6>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n            <thead>\n              <tr>\n                <th># </th>\n                <th>Tel. Number</th>\n                <th>Dorilar va soni</th>\n                <th>Umumiy summa</th>\n                <th>Vaqt</th>\n                <th>To'lov turi</th>\n                <th>Carta raqami</th>\n                <th>Yetkazib berish turi</th>\n                <th>Manzil</th>\n                <th>Status</th>\n                <th>Qabul qilish</th>\n                <th>O'chirish</th>\n              </tr>\n            </thead>\n            <tfoot>\n              <tr *ngFor= \"let order of orders, let i=index\">\n                <th>{{i+1}}</th>\n                <th>{{order.telnumber}}</th>\n                <!-- <th>{{order.pharms}}</th> -->\n                <!-- <th><p *ngFor = \"let pharm of  pharms  \">\n                  <b>{{pharm.name}}</b> dan \n                  <b>{{rate}}</b> miqdorda\n                </p><br></th> -->\n                <th>\n                    <p *ngFor = \" let pharm of pharms[i], let j=index\">\n                      <b>{{pharm.name}}</b>  dan <b>{{rate[i][j]}}  </b>  ta   </p>\n                </th>\n                <th>{{order.rate}}</th>\n                <th>{{order.date}}</th>\n                <th>{{order.payType}} </th>\n                <th>{{order.scoreNumber}}</th>\n                <th>{{order.forward}}</th>\n                <th>{{order.address}}</th>\n                <th style=\"color: red\">{{order.status}}</th>\n                <th><button (click)=\"accept(order._id, order)\"><mdb-icon size=\"2x\" class=\"indigo-text pr-3\" far icon=\"check-square\"></mdb-icon></button></th>\n                 <!-- <th> <button mdbBtn (click)=\"accept(order._id, order)\" type=\"button\" gradient=\"peach\" rounded=\"true\" mdbWavesEffect>Accept</button>\n                 </th>\n                 <th> <button mdbBtn (click)=\"delete(order._id)\" type=\"button\" gradient=\"red\" rounded=\"true\" mdbWavesEffect>Delete</button>\n                 </th> -->\n                 <th><button (click)=\"delete(order._id)\" ><mdb-icon size=\"2x\" class=\"red-text pr-3\" fas icon=\"trash\"></mdb-icon></button></th>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-pharms/admin-pharms.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-pharms/admin-pharms.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <h1 class=\"h3 mb-2 text-gray-800\">Barcha Dorilar</h1>\n    <p class=\"mb-4\">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.</p>\n\n    <!-- DataTales Example -->\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Yangi Dori qo'shish </h6>\n            <a routerLink='/admin/add-pharm' class=\"d-flex ml-3\">\n                <mdb-icon fas icon=\"plus\" size=\"2x\"></mdb-icon>\n            </a>\n        </div>\n        <!-- <div class=\"card-body\"> -->\n\n        <div style=\"width: 100%\">\n\n            <mat-form-field style=\"widows: 40%; text-align: center\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Qidirish...\">\n            </mat-form-field>\n\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"dataSource\" matSort style=\"width: 100%\">\n\n                    <!-- ID Column -->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>ID</b> </th>\n                        <td mat-cell *matCellDef=\"let row, let i=index\">{{i+1}}</td>\n                    </ng-container>\n\n                    <!-- Progress Column -->\n                    <ng-container matColumnDef=\"progress\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>Nomi : </b> </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                    </ng-container>\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Photo : </b></th>\n                        <td mat-cell *matCellDef=\"let row\">\n                            <a href=\"/images/{{row.logo}}\">\n\n                                <img width=\"80\" src=\"/images/{{row.logo}}\" alt=\"\">\n                            </a>\n                        </td>\n                    </ng-container>\n\n                    <!-- Color Column -->\n                    <ng-container matColumnDef=\"color\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Narxi : </b></th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.price}} </td>\n                    </ng-container>\n                    <!-- \"./node_modules/chart.js/dist/Chart.js\", -->\n\n                    <ng-container matColumnDef=\"rate\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header><b> Soni : </b></th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.rate}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"sale\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header><b> Skidka :</b> </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.sale}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"roomy\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Kategoriya : </b> </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.roomy}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"edit\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> O'zgartirish : </b> </th>\n                        <td mat-cell *matCellDef=\"let row\"> \n                                <button routerLink = \"/admin/update/{{row._id}}\" ><mdb-icon size=\"2x\" class=\"cyan-text pr-3\" fas icon=\"edit\"></mdb-icon></button>\n                        </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"delete\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> O'chirish :</b> </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                            <button (click)=\"delete(row._id)\"><mdb-icon size=\"2x\" class=\"red-text pr-3\" fas icon=\"trash\"></mdb-icon></button>\n                        </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                    </tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n            </div>\n\n\n\n\n\n\n\n\n        </div>\n\n        <!-- </div> -->\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-users/admin-users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-users/admin-users.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n\n  <!-- Page Heading -->\n  <h1 class=\"h3 mb-2 text-gray-800\">All Users</h1>\n  <p class=\"mb-4\">DataTables is a third party plugin that is used to generate\n    the demo table below. For more information about DataTables, please visit the official\n    DataTables documentation.</p>\n \n\n  <!-- DataTales Example -->\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <h6 class=\"m-0 font-weight-bold text-primary\">All Users</h6>\n    </div>\n    <div class=\"card-body\">\n\n\n      <!-- <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>Tel Number</th>\n              <th>Name</th>\n              <th>Address</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tfoot>\n            <tr *ngFor=\"let user of users\">\n              <th>{{user.number}}</th>\n              <th>{{user.name}}</th>\n              <th>{{user.address}}</th>\n\n              <th> <button mdbBtn type=\"button\" color=\"danger\" rounded=\"true\" (click)=\"delete(user._id)\"\n                  mdbWavesEffect>Delete</button></th>\n          </tfoot>\n        </table>\n\n      </div> -->\n\n\n      <div style=\"width: 100%\">\n  \n          <mat-form-field style=\"widows: 40%; text-align: center\">\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Qidirish...\">\n            </mat-form-field>\n            \n            <div class=\"mat-elevation-z8\">\n              <table mat-table [dataSource]=\"dataSource\" matSort style=\"width: 100%\">\n            \n                <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>ID</b> </th>\n                  <td mat-cell *matCellDef=\"let row, let i=index\">{{i+1}}</td>\n                </ng-container>\n            \n                <!-- Progress Column -->\n                <ng-container matColumnDef=\"number\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> <b>Tel. Number : </b> </th>\n                  <td mat-cell *matCellDef=\"let row\"> {{row.number}} </td>\n                </ng-container>\n            \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Name : </b></th>\n                  <td mat-cell *matCellDef=\"let row\">{{row.name}}   </td>\n                </ng-container>\n            \n                <!-- Color Column -->\n                <ng-container matColumnDef=\"address\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> Address : </b></th>\n                  <td mat-cell *matCellDef=\"let row\"  > {{row.address}} </td>\n                </ng-container>\n                <!-- \"./node_modules/chart.js/dist/Chart.js\", -->\n\n                    <ng-container matColumnDef=\"delete\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <b> O'chirish :</b> </th>\n                        <td mat-cell *matCellDef=\"let row\"  >\n                            <button (click)=\"delete(row._id)\" ><mdb-icon size=\"2x\" class=\"red-text pr-3\" fas icon=\"trash\"></mdb-icon></button>\n                        </td>\n                      </ng-container>\n            \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                </tr>\n              </table>\n            \n              <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n            </div>\n        </div>\n        \n\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<html lang=\"en\">\n<body id=\"page-top\">\n\n  <!-- Page Wrapper -->\n  <div id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n      <!-- Sidebar - Brand -->\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" routerLink=\"/admin\">\n        <div class=\"sidebar-brand-icon\">\n         <img src=\"assets/website/img/mini-logo.png\" width=\"50px\" alt=\"\">\n        </div>\n        <div class=\"sidebar-brand-text mx-3\">ADMIN PAGE\n           <!-- <sup>2</sup> -->\n          </div>\n      </a>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider my-0\">\n\n      <!-- Nav Item - Dashboard -->\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/admin\">\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n          <span>Home</span></a>\n      </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider\">\n\n      <!-- Heading -->\n      <div class=\"sidebar-heading\">\n        Interface\n      </div>\n\n      <!-- Nav Item - Pages Collapse Menu -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n          <i class=\"fas fa-fw fa-cog\"></i>\n          <span>Buyurtmalar</span>\n        </a>\n        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Buyurtmalar haqida:</h6>\n            <a class=\"collapse-item\" routerLink=\"/admin/orders\">Yangi buyutrmalar</a>\n            <a class=\"collapse-item\" routerLink=\"/admin/orders-doing\">Amaldagi buyurtmalar</a>\n            <a class=\"collapse-item\" routerLink=\"/admin/orders-success\">Yakunlangan buyurtmalar</a>\n          </div>\n        </div>\n      </li>\n\n      <!-- Nav Item - Utilities Collapse Menu -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\n          <i class=\"fas fa-fw fa-wrench\"></i>\n          <span>Sozlamalar</span>\n        </a>\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Sozlamalar:</h6>\n            <a class=\"collapse-item\" routerLink=\"/admin/pharms\">Dorilar</a>\n            <a class=\"collapse-item\" routerLink=\"category\">Kategoriyalar</a>\n            <a class=\"collapse-item\" routerLink = \"moderators\">Moderatorlar</a>\n            <a class=\"collapse-item\" routerLink = \"users\">Userlar</a>\n          </div>\n        </div>\n      </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider\">\n\n      <!-- Heading -->\n      <div class=\"sidebar-heading\">\n        Addons\n      </div>\n\n      <!-- Nav Item - Pages Collapse Menu -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n          <i class=\"fas fa-fw fa-folder\"></i>\n          <span>Pages</span>\n        </a>\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n          <div class=\"bg-white py-2 collapse-inner rounded\">\n            <h6 class=\"collapse-header\">Login Screens:</h6>\n            <a class=\"collapse-item\" href=\"login.html\">Login</a>\n            <a class=\"collapse-item\" href=\"register.html\">Register</a>\n            <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\n            <div class=\"collapse-divider\"></div>\n            <h6 class=\"collapse-header\">Other Pages:</h6>\n            <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\n            <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\n          </div>\n        </div>\n      </li>\n \n      \n\n      <!-- Nav Item - Tables -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"alarm()\" >\n          <i class=\"fas fa-fw fa-table\"></i>\n          <span>Tables</span></a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#logoutModal\" >\n              <mdb-icon fas icon=\"sign-out-alt\"></mdb-icon>\n            <span>LogOut</span></a>\n        </li>\n\n      <!-- Divider -->\n      <hr class=\"sidebar-divider d-none d-md-block\">\n\n      <!-- Sidebar Toggler (Sidebar) -->\n      <div class=\"text-center d-none d-md-inline\">\n        <button class=\"rounded-circle border-0\"   id=\"sidebarToggle\" ></button>\n      </div>\n\n    </ul>\n    <!-- End of Sidebar -->\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n      <!-- Main Content -->\n      <div id=\"content\">\n\n        <!-- Topbar -->\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n          <!-- Sidebar Toggle (Topbar) -->\n          <button   class=\"btn btn-link d-md-none rounded-circle mr-3\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n\n          <!-- Topbar Search -->\n          <!-- <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" type=\"button\">\n                  <i class=\"fas fa-search fa-sm\"></i>\n                </button>\n              </div>\n            </div>\n          </form> -->\n\n          <!-- Topbar Navbar -->\n          <ul class=\"navbar-nav ml-auto\">\n\n            <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n            <li class=\"nav-item dropdown no-arrow d-sm-none\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-search fa-fw\"></i>\n              </a>\n              <!-- Dropdown - Messages -->\n              <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n                <form class=\"form-inline mr-auto w-100 navbar-search\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-primary\" type=\"button\">\n                        <i class=\"fas fa-search fa-sm\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </li>\n\n            <!-- Nav Item - Alerts -->\n            <li class=\"nav-item dropdown no-arrow mx-1\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-bell fa-fw\"></i>\n                <!-- Counter - Alerts -->\n                <span class=\"badge badge-danger badge-counter\">3+</span>\n              </a>\n              <!-- Dropdown - Alerts -->\n              <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n                <h6 class=\"dropdown-header\">\n                  Alerts Center\n                </h6>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                  <div class=\"mr-3\">\n                    <div class=\"icon-circle bg-primary\">\n                      <i class=\"fas fa-file-alt text-white\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <div class=\"small text-gray-500\">December 12, 2019</div>\n                    <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n                  </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                  <div class=\"mr-3\">\n                    <div class=\"icon-circle bg-success\">\n                      <i class=\"fas fa-donate text-white\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <div class=\"small text-gray-500\">December 7, 2019</div>\n                    $290.29 has been deposited into your account!\n                  </div>\n                </a>\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                  <div class=\"mr-3\">\n                    <div class=\"icon-circle bg-warning\">\n                      <i class=\"fas fa-exclamation-triangle text-white\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <div class=\"small text-gray-500\">December 2, 2019</div>\n                    Spending Alert: We've noticed unusually high spending for your account.\n                  </div>\n                </a>\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n              </div>\n            </li>\n\n            <!-- Nav Item - Messages -->\n          \n\n            <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n            <!-- Nav Item - User Information -->\n            <li class=\"nav-item dropdown no-arrow\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Admin</span>\n                <!-- <img class=\"img-profile rounded-circle\"  src=\"images.png\"> -->\n              </a>\n              <!-- Dropdown - User Information -->\n              <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                  Profile\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                  Settings\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                  Activity Log\n                </a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                  <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                  Logout\n                </a>\n              </div>\n            </li>\n\n          </ul>\n\n        </nav>\n        <!-- End of Topbar -->\n\n        <!-- Begin Page Content -->\n       <router-outlet></router-outlet>\n        <!-- /.container-fluid -->\n\n      </div>\n      <!-- End of Main Content -->\n\n      <!-- Footer -->\n      <footer class=\"sticky-footer bg-white\">\n        <div class=\"container my-auto\">\n          <div class=\"copyright text-center my-auto\">\n            <img src=\"assets/pro.jpg\" width=\"40px\" alt=\"\">\n            <span>ProgressPro &copy; Mahsuloti 2019</span>\n          </div>\n        </div>\n      </footer>\n      <!-- End of Footer -->\n\n    </div>\n    <!-- End of Content Wrapper -->\n\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <!-- Scroll to Top Button-->\n  <!-- <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n    <i class=\"fas fa-angle-up\"></i>\n  </a> -->\n\n  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-danger\" type=\"button\" data-dismiss=\"modal\" (click)=\"logout()\" >LogOut</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/orders-doing/orders-doing.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/orders-doing/orders-doing.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <h1 class=\"h3 mb-2 text-gray-800\">Bajarilayotgan buyurtmalar</h1>\n  <p class=\"mb-4\">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target=\"_blank\" href=\"https://datatables.net\">official DataTables documentation</a>.</p>\n  \n  <!-- DataTales Example -->\n  <div class=\"card shadow mb-4\">\n    <div class=\"card-header py-3\">\n      <h6 class=\"m-0 font-weight-bold text-primary\">DataTables Example</h6>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Tel. Number</th>\n              <th>Dorilar soni</th>\n              <th>Umumiy summa</th>\n              <th>Vaqt</th>\n              <th>To'lov turi</th>\n              <th>Karta raqami</th>\n              <th>Yetkazib berish turi</th>\n              <th>Manzil</th>\n              <th>Status</th>\n              <th>Qabul qilish</th>\n              <th>O'chirish</th>\n            </tr>\n          </thead>\n          <tfoot>\n            <tr *ngFor= \"let order of orders, let i=index\">\n              <th>{{i+1}}</th>\n              <th>{{order.telnumber}}</th>\n              <th><p *ngFor = \"let pharm of  pharms[i] , let j=index\">\n                <b>{{pharm.name}}</b> dan <b>{{rate[i][j]}}</b> ta  \n              </p><br></th>\n              <th>{{order.rate}}</th>\n              <th>{{order.date}}</th>\n              <th>{{order.payType}} </th>\n              <th>{{order.scoreNumber}}</th>\n              <th>{{order.forward}}</th>\n              <th>{{order.address}}</th>\n              <th style=\"color: blue\">{{order.status}}</th>\n               <!-- <th> <button mdbBtn (click)=\"accept(order._id, order)\" type=\"button\" gradient=\"peach\" rounded=\"true\" mdbWavesEffect>Accept</button>\n               </th> -->\n               <th><button (click)=\"accept(order._id, order)\"><mdb-icon size=\"2x\" class=\"indigo-text pr-3\" far icon=\"check-square\"></mdb-icon></button></th>\n               <th><button (click)=\"delete(order._id)\" ><mdb-icon size=\"2x\" class=\"red-text pr-3\" fas icon=\"trash\"></mdb-icon></button></th>\n\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/about-me/about-me.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/about-me/about-me.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboute-eco-pharma bg-white\">\t\n    <div class=\"container p-0\">\t\n      <div style=\"padding: 30px 0;\">\t\n        <h3>Biz haqimizda</h3>\n        <div class=\"row\">\t\n          <div class=\"col-lg-7\" >\n            <div class=\"\">\n              <img src=\"assets/website/img/v3.png\" alt=\"\" class=\"py-3 img-fluid w-100\">\n            </div>\n            <div >\n              <div class=\"py-2\"><span class=\"font-weight-bold\">\tEcoPharma</span> – интернет-магазин потребительских товаров.</div>\n              У нас вы сможете найти более 5000 наименований товаров в различных категориях. Среднее время доставки товаров - два часа с момента осуществления заказа. Заказы принимаются и доставляются без выходных. У нас не существует минимальной суммы заказа. Оплата принимается в форме онлайн платежей и наличных средств. При выборе обычной доставки, доставка осуществляется бесплатно, во временном интервале, указанном при заказе.\n            </div>\n          </div>\n          <div class=\"col-lg-5\">\t\n            <div class=\"\" style=\"position: relative;padding-top: 20px;\">\n              <h4 class=\"py-2\">Biz bilan bog'lanish</h4>\n              <div class=\"\t\" style=\"padding-left: 40px;\">\n                <div class=\"font-weight-bold\" ><span class=\"fa fa-phone text-primary absolute\" style=\"font-size: 22px;position: absolute;left:10px;\"></span>\tTelefon orqali bog'lanish</div>\n                <div>Barcha savollaringiz bo’yicha o'zingizga ma’qul paytda, bizga qo'ng'iroq qiling: <br>\t\n                  <span class=\"fa fa-phone \"></span>+998 99 908-76-77</div>\n                  <div  class=\"font-weight-bold py-2\"><span class=\"fa fa-envelope text-primary\" style=\"position: absolute;left: 10px;font-size: 22px;\"></span>Elektron pochta:<a href=\"#\" class=\"text-success\"> ecopharma@gmail.com</a></div>\t\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n      </div>\n    </div>\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/about-pharms/about-pharms.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/about-pharms/about-pharms.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"drug-list\">\n\n   \n    <div class=\"container p-0\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 \">\n          <div class=\"list-group  \">\n            <a href=\"#\" class=\"list-group-item list-group-item-action disabled font-weight-bold text-dark\" tabindex=\"-1\" aria-disabled=\"true\">Toifalar <span class=\"fa fa-angle-down text-dark font-weight-bold float-right\"\t>\t</span></a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action \">Suyak-muskul tizimi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Shamollashga qarshi dorilar</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Xazm qilish tizimi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\n          </div>\n          <div class=\"drug-checkbox bg-white\">\n            <div class=\"font-weight-bold text-dark drug-checkbox-tem \">Bo'linish turlari  <span class=\"fa fa-angle-down text-dark font-weight-bold float-right\"\t>\t</span>\n            </div>\t\t\t\t\t\t\t\t\t\n            <div class=\"checkbox-div\">\n              <div class=\"pretty p-default p-round w-100 \">\n                <input type=\"checkbox\" >\n                <div class=\"state p-success-o\">\n                  <label>Yangiliklar</label>\n                </div>\n              </div>\t\t\t\t\t\t\t\t\t\t\n              <div class=\"pretty p-default p-round w-100\">\n                <input type=\"checkbox\" />\n                <div class=\"state p-success-o\">\n                  <label>Eng ko'p sotilganlar</label>\n                </div>\n              </div>\t\t\t\t\t\t\t\t\t\t\n              <div class=\"pretty p-default p-round w-100\">\n                <input type=\"checkbox\" />\n                <div class=\"state p-success-o\">\n                  <label>Chegirmalar</label>\n                </div>\n              </div>\t\t\t\t\t\t\t\t\t\t\n              <div class=\"pretty p-default p-round w-100\" >\n                <input type=\"checkbox\" />\n                <div class=\"state p-success-o\">\n                  <label>Aksiyadagilar</label>\n                </div>\n              </div>\t\t\t\t\t\t\t\t\t\t\t\n              <div class=\"pretty p-default p-round w-100\">\n                <input type=\"checkbox\" />\n                <div class=\"state p-success-o\">\n                  <label>Success</label>\n                </div>\n              </div>\t\t\t\t\t\t\t\n            </div>\t\t\t\t\t\t\t\t\t\t\n          </div>\n        </div>\n        <div class=\"col-lg-9\">\n          <div class=\"drug-about\">\n            <div class=\"row\">\t\n              <div class=\"col-md-5\">\n                <div class=\"drug-about-img\">\n                  <img src=\"/images/{{pharm.logo}}\"   class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                <h3 class=\"font-weight-bold\">{{pharm.name}}</h3>\n                <div class=\"row no-gutters pt-2\">\t\n                  <div class=\"col-4 \"><span >Ishlab chiqaruvchi:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\">O'zbekiston</span></div>\n                </div>\n                <div class=\"row no-gutters\">\t\n                  <div class=\"col-4\">\t<span>Mavjudligi:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\">Mavjud</span></div>\n                </div>\n                <div class=\"row no-gutters\">\t\n                  <div class=\"col-4\">\t<span>Yetkazib berish:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\"> 1 soat ichida</span></div>\n                </div>\n                <hr>\n                <div class=\"drug-cost-about\">\n                  <h3 class=\" font-weight-bold d-inline-block\">{{pharm.price*q}}</h3>\n                  <span>\n                    <button class=\"drug-about-butto-left\" (click)= \"min()\" >-</button>\n                    <input type=\"text\" placeholder=\"{{q}} ta\">\n                    <button (click)=\"add()\" class=\"drug-about-butto-right\">+</button>\n                  </span>\n                </div>\n                <hr>\t\n                <div class=\"drug-product-shopping\">\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-12\">\n                      <div class=\"drug-product-buy\" style=\"background-color: #00A13C;color: #fff;\">\n                        <button (click)=\"abasket(pharm._id )\"> Sotib olish</button>\n                        <!-- <a routerLink=\"/basket\" class=\"text-white\"><span class=\"fa fa-shopping-cart\"></span> Sotib olish</a> -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <hr>\t\n            </div>\n            <div class=\"drug-about-wrap\">\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Foydalanish uchun ko'rsatmalar</h5>\n                <p> Qorish yoki ichak harakatining oldini olishni talab qiluvchi holatlar.</p>\n                <hr>\t\n              </div>\n\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                  <h5 class=\"font-weight-bold pb-2\">Farmakologik ta'sir\n                  <button (click) = \"uzb()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Uzb</button>\n                  <button (click) = \"rus()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Рус</button>\n                  <button (click) = \"eng()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Узб</button>\n                  </h5>\n\n              </div>\n              <div>\n                <p *ngIf = \"uz\" >{{pharm.sort[0]}} </p>\n                <p *ngIf = \"ru\" >{{pharm.sort[1]}} </p>\n                <p *ngIf = \"en\">{{pharm.sort[2]}} </p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Farmakokinetikasi</h5>\n                <p>{{pharm.inform}}</p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Doza</h5>\n                <p >\n\n                  Preparat ishlab chiqaruvchining dispenseriga yuboriladi. Kattalar va 10 yoshdan oshgan bolalar 13-27 tomchi (5-10 mg); 4 yoshdan 10 yoshgacha bo'lgan bolalar 7-13 tomchi (2,5-5 mg). 4 yoshgacha bo'lgan bolalarga 250 mg / kg tana vaznini yoki 3 kg tana vazniga 2 tomchi miqdorini tavsiya etish tavsiya etiladi. Bolalar uchun preparatni oziq-ovqatga qo'shib qo'yish mumkin. Bolalar kuniga bir marta samarali bo'lishi mumkin. Agar kerak bo'lsa, bolada davolanish muddati uzaytirilishi mumkin, ammo uni uch kunga cheklash afzaldir.\n\n                  Pelikullarni kechqurun olish kerak, shunda kreslo ertalab edi.\n\n                  Katta miqdorda opioidlarni qabul qiluvchi saraton kasalliklarida ich qotib qolishdan saqlanish uchun shifokor retsepti bo'yicha foydalaniladi.\n                </p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Qo'llash mumkin bo'lmagan holatlar</h5>\n                <p >\n                  \n                  Ichak tutilishi; o'tkir yallig'lanishli ichak kasalliklari va qorin organlarining o'tkir kasalliklari (o'tkir appenditsit, ülseratif kolit, peritonit kabi); o'tkir qorin og'rig'i, yuqorida ko'rsatilgan o'tkir yallig'lanish kasalliklarini ko'rsatishi mumkin bo'lgan ko'ngil aynish va gijjalar bilan birga; og'ir suvsizlanish; Natriy pikosulfat va preparatning boshqa tarkibiy qismlariga yuqori sezuvchanlik.\n                </p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Dozani oshirib yuborish</h5>\n                <p >\n                  Alomatlar Yuqori dozalarda Picolaks suyuqlikning ichak harakatlarini, qorin bo'shlig'ining kramplarini (suyuqlik) va suv va elektrolitlar muvozanatining (gipokalemiya, boshqa elektrolitlar va suyuqliklarni yo'qotish), katta ichak shilliq qavatining ishemiyasini klinik jihatdan sezilarli darajada buzishi mumkin. Uzoq muddatli haddan tashqari doz, hipokalemiya natijasida surunkali diareya va qorin og'rig'i, hipokalemiya, ikkinchi darajali hiperaldosteronizm, buyrak shikastlanishi va nefrolitiyazaning rivojlanishi, metabolik alkaloz, gipokalemiya va mushaklarning kuchsizlanishiga olib keladi.\n\n                  Davolash. Gastrik lavaj, enterosorbentsni iste'mol qilish (faollashtirilgan uglerod), simptomatik davolash (suv va elektrolit muvozanatini tuzatish, antispazmodikani qo'llash).\n                </p>\t\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n \n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/basket/basket.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/basket/basket.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>This is Basket Page</h1>\n<div >\n<h2>{{pharm.name}}</h2><br>\n<h2>{{price}}</h2><br>\n<h2>{{price/pharm.price}} ta </h2><br>\n<img src=\"http://localhost:5000/images/{{pharm.logo}}\" width=\"200px\" alt=\"\"> \n<br>\n</div>\n<button (click) = \"order(pharm.name, price, price/pharm.price)\" class=\"btn btn-success\">Zakazat</button> -->\n\n\n\n<div class=\"profil bg-white\">\n    <div class=\"container-a p-0\">\n        <div class=\"row\">\n            <div class=\"col-12\"><a href=\"#\" class=\"text-success\">Bosh sahifa</a> / <h4 class=\"d-inline-block\">Xaridlar\n                </h4>\n            </div>\n            <div class=\"col-lg-9 \">\n                <div class=\"bg-white card-product-about\">\n\n                    <div *ngFor=\"let pharm of pharms, let i=index\"\n                        class=\"row justify-content-center align-items-center d-flex py-2 card-product-border\">\n                        <div class=\"col-3 text-center\">\n                            <img src=\"/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid w-75\">\n                        </div>\n                        <div class=\"col-7\">\n                            <p> <b> {{pharm.name}} </b></p>\n                            <p>{{pharm.price}} so'm 1 donasi</p>\n                            <!-- <div class=\"d-inline-block\"><span class=\"font-weight-bold text-success \">\n                                    {{pharm.price}}</span> so'm </div> -->\n                            <div class=\" d-inline-block pl-3\">\n\n                              \n\n                                <div *ngFor=\"let value of values\">\n                                    <!-- <div class=\"drug-cost-about\">\n                                         \n                                        <span>\n                                            <button class=\"drug-about-butto-left\" (click)=\"min()\">-</button>\n                                            <input type=\"text\" placeholder=\"Nechta ?\" #input value=\"{{q}}\">\n                                            <button (click)=\"plus()\" class=\"drug-about-butto-right\">+</button>\n                                        </span>\n                                    </div> -->\n                                    <!-- <p>Bu dori {{pharm.price * q}} lik</p> -->\n                                    <mat-form-field>\n                                            <mat-label>Sonini tanlang...</mat-label>\n                                            <mat-select  #num (selectionChange)=\"add(num.value, pharm.price, pharm._id)\" >\n                                              <mat-option *ngFor=\"let rate of soni[i]\" value=\"{{rate}}\" >{{rate}}</mat-option>\n                                             </mat-select>\n                                          </mat-form-field>\n                                   \n                                    <!-- <input class=\"form-control\"  #input type=\"number\" placeholder=\"Soni\">\n\n                                    <button (click)=\"add(input.value, pharm.price, pharm._id)\">\n                                            <mdb-icon far icon=\"check-circle\" class=\"blue-text pr-3\"></mdb-icon>\n                                            Tasdiqlash\n                                        </button> -->\n\n                                </div>\n\n\n                            </div>\n                        </div>\n                        <div class=\"col-2 text-center\">\n                            <button>\n                                <!-- <mdb-icon far icon=\"check-circle\" class=\"blue-text pr-3\"></mdb-icon> -->\n                                <mdb-icon fas icon=\"trash\" class=\"red-text pr-3\"></mdb-icon>\n                            </button>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n            <div class=\"col-lg-3 \">\n                <div class=\" card-product-about p-3\">\n                    <!-- <h3 class=\"font-weight-bold\">Jami</h3> -->\n                    <div class=\"row\">\n                        <!-- <div class=\"col-6\">\n                            <div> Narxi:</div>\n                            <div> Jami to'lov:</div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div>  so‘m</div>\n                            <div></div>\n                        </div> -->\n                        <div class=\"px-4 w-100\">\n                            <button class=\"btn btn-success text-white w-100  mt-4\" routerLink=\"/order-pharm\"\n                                (click)=\"myfunk()\">Buyurtmani rasmiylashtirish</button>\n                            <!-- <a href=\"#\" class=\"btn btn-success text-white w-100  mt-4\">Buyurtmani rasmiylashtirish</a> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/comparison/comparison.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/comparison/comparison.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"drug-list\">\n\n    <div class=\"drug-list-catalog\">\n        <!-- <div class=\"container p-0\">\n            <a href=\"#\">Suyak-muskul tizimi</a>\n            <a href=\"#\">Suyak-muskul tizimi</a>\n\n        </div> -->\n    </div>\n    <div class=\"container p-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\" *ngFor = \"let pharm of pharms\">\n                <div class=\"drug-about\">\n                    <div class=\"row\">\t\n                        <div class=\"col-12 text-center\">\n                            <div class=\"drug-about-img\"><img src=\"/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid\"></div>\n                        </div>\n                        <div class=\"col-12 text-center\">\n                            <h3 class=\"font-weight-bold\">{{pharm.name}}</h3>\n                            <div class=\"row no-gutters pt-2\">\t\n                                <div class=\"col-6 \"><span >Ishlab chiqaruvchi:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\">O'zbekiston</span></div>\n                            </div>\n                            <div class=\"row no-gutters\">\t\n                                <div class=\"col-6\">\t<span>Mavjudligi:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\">Mavjud</span></div>\n                            </div>\n                            <div class=\"row no-gutters\">\t\n                                <div class=\"col-6\">\t<span>Yetkazib berish:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\"> 1 soat ichida</span></div>\n                            </div>\n                            <hr>\n                        </div>\n                        <hr>\t\n                    </div>\n                    <div class=\"drug-about-wrap\">\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Foydalanish uchun ko'rsatmalar\n                                      <button (click) = \"uzb()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Uzb</button>\n                  <button (click) = \"rus()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Рус</button>\n                  <button (click) = \"eng()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Узб</button>\n\n                            </h5>\n                            <p *ngIf = \"uz\" >{{pharm.sort[0]}} </p>\n                            <p *ngIf = \"ru\" >{{pharm.sort[1]}} </p>\n                            <p *ngIf = \"en\">{{pharm.sort[2]}} </p>\n                             \n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Farmakologik ta'sir</h5>\n                            <p>{{pharm.inform}}</p>\n                            \n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Farmakokinetikasi</h5>\n                            <p>Adsorbsiya va tarqatish.</p>\n                            <p>Natriyni og'iz orqali topshirgandan so'ng, pikozulfat katta assimilyatsiya qilmasdan katta ichakka etadi.</p>\n                            <p>\tBiotransformatsiya.</p>\n                            <p>\tBis- (p-gidroksifenil) -piridil-2-metan (BGPM) ning faol metaboliti yo'g'on ichakdagi bakterial parchalanish natijasida hosil bo'ladi.</p>\n                            <p>Yo'q qilish</p>\n                            <p>Transformatsiyadan so'ng, faqat kichik hajmdagi HBPM so'riladi. Og'iz orqali kiritilganidan so'ng, 10 mg natriy pikosulfat umumiy dozaning 10,4% 48 soatdan so'ng BGPM glyukuronid siydik bilan chiqariladi. Bundan tashqari, BGPM o't bilan glyukuronid shaklida namoyon bo'ladi.</p>\n                            <p>Farmakokinetika va farmakodinamikaning o'zaro bog'liqligi.</p>\n                            <p>Picolaksning ta'siri odatda faol metabolit (BHPM) ning chiqarilishiga qarab preparatni qabul qilganidan 6-12 soat o'tgach sodir bo'ladi. Preparatning ichak tutilishi qon plazmasidagi faol metabolit darajasiga bog'liq emas.</p>\t\t\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Doza</h5>\n                            <p >\n\n                                Preparat ishlab chiqaruvchining dispenseriga yuboriladi. Kattalar va 10 yoshdan oshgan bolalar 13-27 tomchi (5-10 mg); 4 yoshdan 10 yoshgacha bo'lgan bolalar 7-13 tomchi (2,5-5 mg). 4 yoshgacha bo'lgan bolalarga 250 mg / kg tana vaznini yoki 3 kg tana vazniga 2 tomchi miqdorini tavsiya etish tavsiya etiladi. Bolalar uchun preparatni oziq-ovqatga qo'shib qo'yish mumkin. Bolalar kuniga bir marta samarali bo'lishi mumkin. Agar kerak bo'lsa, bolada davolanish muddati uzaytirilishi mumkin, ammo uni uch kunga cheklash afzaldir.\n\n                                Pelikullarni kechqurun olish kerak, shunda kreslo ertalab edi.\n\n                                Katta miqdorda opioidlarni qabul qiluvchi saraton kasalliklarida ich qotib qolishdan saqlanish uchun shifokor retsepti bo'yicha foydalaniladi.\n                            </p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Qo'llash mumkin bo'lmagan holatlar</h5>\n                            <p >\n\n                                Ichak tutilishi; o'tkir yallig'lanishli ichak kasalliklari va qorin organlarining o'tkir kasalliklari (o'tkir appenditsit, ülseratif kolit, peritonit kabi); o'tkir qorin og'rig'i, yuqorida ko'rsatilgan o'tkir yallig'lanish kasalliklarini ko'rsatishi mumkin bo'lgan ko'ngil aynish va gijjalar bilan birga; og'ir suvsizlanish; Natriy pikosulfat va preparatning boshqa tarkibiy qismlariga yuqori sezuvchanlik.\n                            </p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Dozani oshirib yuborish</h5>\n                            <p >\n                                Alomatlar Yuqori dozalarda Picolaks suyuqlikning ichak harakatlarini, qorin bo'shlig'ining kramplarini (suyuqlik) va suv va elektrolitlar muvozanatining (gipokalemiya, boshqa elektrolitlar va suyuqliklarni yo'qotish), katta ichak shilliq qavatining ishemiyasini klinik jihatdan sezilarli darajada buzishi mumkin. Uzoq muddatli haddan tashqari doz, hipokalemiya natijasida surunkali diareya va qorin og'rig'i, hipokalemiya, ikkinchi darajali hiperaldosteronizm, buyrak shikastlanishi va nefrolitiyazaning rivojlanishi, metabolik alkaloz, gipokalemiya va mushaklarning kuchsizlanishiga olib keladi.\n\n                                Davolash. Gastrik lavaj, enterosorbentsni iste'mol qilish (faollashtirilgan uglerod), simptomatik davolash (suv va elektrolit muvozanatini tuzatish, antispazmodikani qo'llash).\n                            </p>\t\n                        </div>\n                    </div>\n                </div>\n            </div>\t\t\t\t\t\n\n            <!-- <div class=\"col-sm-6\">\n                <div class=\"drug-about\">\n                    <div class=\"row\">\t\n                        <div class=\"col-12 text-center\">\n                            <div class=\"drug-about-img\"><img src=\"assets/website/img/reklama-1.png\" alt=\"\" class=\"img-fluid\"></div>\n                        </div>\n                        <div class=\"col-12 text-center\">\n                            <h3 class=\"font-weight-bold\">ПИКОЛАКС КАПЛИ 0,75% 15МЛ</h3>\n                            <div class=\"row no-gutters pt-2\">\t\n                                <div class=\"col-6 \"><span >Ishlab chiqaruvchi:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\">O'zbekiston</span></div>\n                            </div>\n                            <div class=\"row no-gutters\">\t\n                                <div class=\"col-6\">\t<span>Mavjudligi:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\">Mavjud</span></div>\n                            </div>\n                            <div class=\"row no-gutters\">\t\n                                <div class=\"col-6\">\t<span>Yetkazib berish:</span></div>\n                                <div class=\"col-6\"><span class=\"font-weight-bold\"> 1 soat ichida</span></div>\n                            </div>\n                            <hr>\n                        </div>\n                        <hr>\t\n                    </div>\n                    <div class=\"drug-about-wrap\">\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Foydalanish uchun ko'rsatmalar</h5>\n                            <p> Qorish yoki ichak harakatining oldini olishni talab qiluvchi holatlar.</p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Farmakologik ta'sir</h5>\n                            <p>\t\n                            Picolaksning faol moddasi bo'lgan natriy pikosulfat triarilmetan guruhining lokal ta'siri bilan ajralib turuvchi agentdir. Katta ichakdagi bakterial parchalanishdan so'ng natriy pikosulfat o'zining shilliq qavatini rag'batlantiradi, peristaltikni tezlashtiradi va ichakning lümeni ichidagi suv va elektrolitlar to'planishiga yordam beradi. Buning natijasida ichak harakatini rag'batlantirish, tranzit vaqtini kamaytirish va najasni yumshatish.</p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Farmakokinetikasi</h5>\n                            <p>Adsorbsiya va tarqatish.</p>\n                            <p>Natriyni og'iz orqali topshirgandan so'ng, pikozulfat katta assimilyatsiya qilmasdan katta ichakka etadi.</p>\n                            <p>\tBiotransformatsiya.</p>\n                            <p>\tBis- (p-gidroksifenil) -piridil-2-metan (BGPM) ning faol metaboliti yo'g'on ichakdagi bakterial parchalanish natijasida hosil bo'ladi.</p>\n                            <p>Yo'q qilish</p>\n                            <p>Transformatsiyadan so'ng, faqat kichik hajmdagi HBPM so'riladi. Og'iz orqali kiritilganidan so'ng, 10 mg natriy pikosulfat umumiy dozaning 10,4% 48 soatdan so'ng BGPM glyukuronid siydik bilan chiqariladi. Bundan tashqari, BGPM o't bilan glyukuronid shaklida namoyon bo'ladi.</p>\n                            <p>Farmakokinetika va farmakodinamikaning o'zaro bog'liqligi.</p>\n                            <p>Picolaksning ta'siri odatda faol metabolit (BHPM) ning chiqarilishiga qarab preparatni qabul qilganidan 6-12 soat o'tgach sodir bo'ladi. Preparatning ichak tutilishi qon plazmasidagi faol metabolit darajasiga bog'liq emas.</p>\t\t\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Doza</h5>\n                            <p >\n\n                                Preparat ishlab chiqaruvchining dispenseriga yuboriladi. Kattalar va 10 yoshdan oshgan bolalar 13-27 tomchi (5-10 mg); 4 yoshdan 10 yoshgacha bo'lgan bolalar 7-13 tomchi (2,5-5 mg). 4 yoshgacha bo'lgan bolalarga 250 mg / kg tana vaznini yoki 3 kg tana vazniga 2 tomchi miqdorini tavsiya etish tavsiya etiladi. Bolalar uchun preparatni oziq-ovqatga qo'shib qo'yish mumkin. Bolalar kuniga bir marta samarali bo'lishi mumkin. Agar kerak bo'lsa, bolada davolanish muddati uzaytirilishi mumkin, ammo uni uch kunga cheklash afzaldir.\n\n                                Pelikullarni kechqurun olish kerak, shunda kreslo ertalab edi.\n\n                                Katta miqdorda opioidlarni qabul qiluvchi saraton kasalliklarida ich qotib qolishdan saqlanish uchun shifokor retsepti bo'yicha foydalaniladi.\n                            </p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Qo'llash mumkin bo'lmagan holatlar</h5>\n                            <p >\n\n                                Ichak tutilishi; o'tkir yallig'lanishli ichak kasalliklari va qorin organlarining o'tkir kasalliklari (o'tkir appenditsit, ülseratif kolit, peritonit kabi); o'tkir qorin og'rig'i, yuqorida ko'rsatilgan o'tkir yallig'lanish kasalliklarini ko'rsatishi mumkin bo'lgan ko'ngil aynish va gijjalar bilan birga; og'ir suvsizlanish; Natriy pikosulfat va preparatning boshqa tarkibiy qismlariga yuqori sezuvchanlik.\n                            </p>\n                            <hr>\t\n                        </div>\n                        <div class=\"\">\n                            <h5 class=\"font-weight-bold pb-2\">Dozani oshirib yuborish</h5>\n                            <p >\n                                Alomatlar Yuqori dozalarda Picolaks suyuqlikning ichak harakatlarini, qorin bo'shlig'ining kramplarini (suyuqlik) va suv va elektrolitlar muvozanatining (gipokalemiya, boshqa elektrolitlar va suyuqliklarni yo'qotish), katta ichak shilliq qavatining ishemiyasini klinik jihatdan sezilarli darajada buzishi mumkin. Uzoq muddatli haddan tashqari doz, hipokalemiya natijasida surunkali diareya va qorin og'rig'i, hipokalemiya, ikkinchi darajali hiperaldosteronizm, buyrak shikastlanishi va nefrolitiyazaning rivojlanishi, metabolik alkaloz, gipokalemiya va mushaklarning kuchsizlanishiga olib keladi.\n\n                                Davolash. Gastrik lavaj, enterosorbentsni iste'mol qilish (faollashtirilgan uglerod), simptomatik davolash (suv va elektrolit muvozanatini tuzatish, antispazmodikani qo'llash).\n                            </p>\t\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n\n\n        </div>\n    </div>\n \n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/delivery/delivery.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/delivery/delivery.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-a\n    p-0\">\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-12\">\n        <div class=\"footer-link\"> \n          <a href=\"#\">Biz haqimizda</a>\n          <a href=\"#\">To'lov va EcoPharm xizmatlari</a>\n          <a href=\"#\">Savol va javoblar</a>\n          <a href=\"#\">Ommaviy oferta</a>\n        </div>\n        <div class=\"footer-text\">\n          <div class=\"\">\n            Barcha savollaringiz bo’yicha o'zingizga ma’qul paytda, bizga qo'ng'iroq qiling: <span class=\"fa fa-phone\">+998 71 200-11-12</span> \n          </div>\n          <br>\n          <div class=\"\">\n            E-pochta manzilingiz: <span>support@EcoPharm.uz</span>\t\t\t\t\t\t\t\t\n          </div>\n          <br>\n        </div>\n        <div class=\"footer-text-about\">\n          2016 Internet-do’kon LeBazar.uz: Oziq-ovqat mahsulotlari, xo’jalik mollari, va boshqalar. \n          Mahsulotni yetkazib berish Toshkent hududida amalga oshiriladi. Barcha huquqlar himoyalangan.\n        </div>\n      </div>\n      <div class=\"col-5 footer-about-image\">\n        <div class=\"row \" style=\"padding-top: 30px;\">\n          <div class=\"col-6 \">\n            <div class=\"footer-image\">\n              <img src=\"assets/website/img/Footer.png\" alt=\"\" class=\"img-fluid\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"footer-aplication\">\n              <div class=\"aplication-text\">Ilovamizni o’rnating hamda xaridlarni oson amalga oshiring!</div>\n              <div class=\"aplication-img\">\n                <a href=\"#\"><img src=\"assets/website/img/aplication-1.png\" alt=\"\" class=\"img-fluid\"></a>\n                <a href=\"#\"><img src=\"assets/website/img/aplication-2.png\" alt=\"\" class=\"img-fluid\"></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/home/best-offer/best-offer.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/home/best-offer/best-offer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrap-best-offer\">\r\n    <div class=\"container-a p-0\">\r\n        <div class=\"catalog-teme\">\r\n            <div class=\"d-inline-block catalog-text\"> {{'HOME.TITLE' | translate}}</div>\r\n\r\n            <button routerLink = \"/pharms\" class=\"shopping-button-all\">{{'HOME.OLD' | translate}} <i class=\"fa fa-angle-right\"></i></button>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-product \" *ngFor=\"let pharm of pharms\">\r\n                <div class=\"drug-product \">\r\n\r\n                    <div class=\"finished-icon\" *ngIf=\"pharm.rate === 0\">\r\n                        <!-- <div class=\"wrap-new-action\"><span>AND</span></div>  -->\r\n                        <div class=\"finished-icon-text\">{{'HOME.NOL' | translate}}</div>\r\n\r\n                    </div>\r\n\r\n                    <div routerLink=\"/about-pharm/{{pharm._id}}\" class=\"drug-product-about\">\r\n\r\n                        <div *ngIf=\"pharm.sale !==0\" class=\"wrap-new-action-now\">\r\n                            <span>{{pharm.sale}}%</span>\r\n                        </div>\r\n\r\n                        <div class=\"product-img\">\r\n                            <img src=\"/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid\">\r\n                        </div>\r\n\r\n                        <div class=\"drud-name pt-2 \">{{pharm.name}}</div>\r\n                        <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n                        <div class=\"drug-product-cost\"><span>{{pharm.price }} </span> {{'HOME.SONI' | translate }} </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"drug-product-shopping\">\r\n                        <div class=\"row no-gutters\">\r\n                            <div class=\"col-9\">\r\n                                <div class=\"drug-product-buy\">\r\n                                    <button (click)=\"addBasket(pharm._id, pharm.name)\"><span class=\"fa fa-shopping-cart\"></span>{{'HOME.BUTTON' | translate}} </button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <div class=\"drug-product-buy\">\r\n                                    <button (click) = \"comparison(pharm._id)\" > \r\n                                      <mdb-icon fas icon=\"exchange-alt\"></mdb-icon>\r\n                  </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-product \">\r\n          <div class=\"drug-product \" >\r\n            <div class=\"drug-product-about\">\r\n              <div class=\"product-img\">\r\n                <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\r\n              </div>\r\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\r\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\r\n            </div>\r\n            <div class=\"drug-product-shopping\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-9\">\r\n                  <div class=\"drug-product-buy\">\r\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <div class=\"drug-product-buy product-buy-border\">\r\n                    <a href=\"#\"> \r\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\t\t\t\t\r\n        </div> -->\r\n\r\n            <!-- <div class=\" col-product \" >\r\n          <div class=\"drug-product \">\r\n            <div class=\"wrap-new-action\"><span>new</span></div>\r\n            <div class=\"drug-product-about\">\r\n              <div class=\"product-img\">\r\n                <img src=\"assets/website/img/Новая папка (2)/4.jpg\" alt=\"\" class=\"img-fluid\" >\r\n              </div>\r\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\r\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\r\n            </div>\r\n            <div class=\"drug-product-shopping\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-9\">\r\n                  <div class=\"drug-product-buy\">\r\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <div class=\"drug-product-buy product-buy-border\">\r\n                    <a href=\"#\">\r\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\t\t\t\t\r\n        </div> -->\r\n\r\n            <!-- <div class=\"col-product\">\r\n          <div class=\"drug-product \" >\r\n            <div class=\"drug-product-about\">\r\n              <div class=\"product-img\">\r\n                <img src=\"assets/website/img/Новая папка (2)/1.jpg\" alt=\"\" class=\"img-fluid\" >\r\n              </div>\r\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки - 60шт. </div>\r\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\r\n            </div>\r\n            <div class=\"drug-product-shopping\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-9\">\r\n                  <div class=\"drug-product-buy\">\r\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <div class=\"drug-product-buy product-buy-border\">\r\n                    <a href=\"#\">\r\n                      <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\t\t\t\t\r\n        </div>\t -->\r\n\r\n            <!-- <div class=\"col-product \">\r\n          <div class=\"drug-product \" >\r\n            <div class=\"drug-product-about\">\r\n              <div class=\"product-img\">\r\n                <img src=\"assets/website/img/Новая папка (2)/1.jpg\" alt=\"\" class=\"img-fluid\" >\r\n              </div>\r\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\r\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\r\n            </div>\r\n            <div class=\"drug-product-shopping\">\r\n              <div class=\"row no-gutters\">\r\n                <div class=\"col-9\">\r\n                  <div class=\"drug-product-buy\">\r\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <div class=\"drug-product-buy product-buy-border\">\r\n                    <a href=\"#\">\r\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\t\t\t\t\r\n        </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- wrap-best-offer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-logo\" style=\"margin-top: 10px;\">\n    <div class=\"wrap-delivery\">\n      <div class=\"header-container container-a\" >\n        <div class=\"row no-gutters\">\n          <div class=\"coll-3\">\n            <div class=\"con-header\">\n              <div class=\"\"><a routerLink=\"/about\" class=\" con-header-text text-uppercase text-white\">{{'NAVBAR.NEWS' | translate}}</a></div>\n            </div>\n          </div>\n          <div class=\"coll-3\">\n            <div class=\"con-header\">\n              <div class=\"\"><a routerLink=\"/warranty\" class=\"con-header-text text-uppercase text-white\">{{'NAVBAR.KAFOLAT' | translate}}</a></div>\n            </div>\n          </div>\n          <div class=\"coll-3\">\n            <div class=\"con-header\">\n              <div class=\"\"><a routerLink=\"/pharm-service\" class=\"con-header-text text-uppercase text-white\">{{'NAVBAR.TOLOV' | translate}}</a></div>\n            </div>\n          </div>\n          <div class=\"coll-3\">\n            <div class=\"con-header\">\n              <div class=\"\"><a routerLink=\"/question-answer\" class=\"con-header-text text-uppercase text-white\">{{'NAVBAR.SAVOL-JAVOB' | translate}}</a></div>\n            </div>\n          </div>\n          <div class=\"coll-3\">\n            <div class=\"con-header\">\n              <div class=\"\"><a routerLink=\"/order-site\" class=\"con-header-text text-uppercase text-white\">{{'NAVBAR.MALUMOT'| translate}}</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n<section class=\"wrap-shopping-body\">\n    <div class=\"container-a p-0\">\n      <div class=\"wrap-shopping-tem\" >\n        <div class=\"row no-gutters\">\n          <div class=\"col-lg-3 \">\n            <div class=\"wrap-shopping-menu\">\n              <div class=\"wrap-shopping-menu-teme\">\n                <div class=\"shopping-menu-teme\">{{'SIDENAV.KATEGORIYA' | translate}}</div>\n                <button routerLink='/pharms' class=\"shopping-button-all\">Hammasi <i class=\"fa fa-angle-right\"></i></button>\n              </div>\n              <div class=\"shopping-menu\">\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"tablets\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/hospital.png\" alt=\"\"> -->\n                    </span> \n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.Dorilar' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\">\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text \">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Suyak-mushak tizimi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Shamollashga qarshi dori</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Xazm qilish tizimi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Qon-tomir sistemasi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Nerv sistemasi</a>\n                              </div>\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Siydik-tanosil tizimi</a>\n                              </div>\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Teri kasalliklari</a>\n                              </div>\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Nafas olish sistemasi</a>\n                              </div>\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Sezgi organlari</a>\n                              </div>\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\" >Bolalar aptechkasi</a>\n                              </div>\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"baby\"></mdb-icon>  \n                      <!-- <img src=\"assets/website/img/medical-icons/enema.png\" alt=\"\"> -->\n                    </span> \n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.ONA-BOLA' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ-one catalog-activ\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Bolalarni parvarishlash</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Bolalar ozuqalari</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Bolarni cho'miltirish</a>\n                              </div>\t\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Bolalar gigienasi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Tagliklar</a>\n                              </div>\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">This testing Pharm</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a routerLink=\"/about-pharm\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\t\t\t\t\t\t\t\t\t\t\n                </div>\t\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"stethoscope\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/organ-transplantation.png\" alt=\"\" > -->\n                    </span>\n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.TIBBIY-ASBOBLAR' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ catalog-activ-two\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Ingalyatorlar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Zondlar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Tonometrlar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Ortopediya maxsulotlari</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Qoplamalar</a>\n                              </div>\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Katetrlar</a>\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Dializatorlar</a>\n                              </div>\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Termometrlar</a>\n                              </div>\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"brain\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/health-checkup.png\" alt=\"\" > -->\n                    </span>\n                     \t<span class=\"shoping-menu-text-about\">{{'SIDENAV.OZUQALAR' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ catalog-activ-three\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Dietalar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Enteral ovqatlanish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Davolovchi ozuqalar</a>\n                              </div>\t\t\t\t\t\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"user-md\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/medical-thermometer.png\" alt=\"\"> -->\n                    </span>\n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.GOZALLIK' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ catalog-activ-four\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Sog'likni parvarishlash</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Yuz terisini parvarishlash</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Qomatni parvarishlash</a>\n                              </div>\t\t\t\t\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"mortar-pestle\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/vaccine-drop.png\" alt=\"\" > -->\n                    </span>\n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.GIYOHLAR' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ catalog-activ-five\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Giyoxlar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Davolovchi moyl</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Choylar</a>\n                              </div>\t\t\t\t\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6\" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\n\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"allergies\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/health-book.png\" alt=\"\" > -->\n                    </span> <span class=\"shoping-menu-text-about\">{{'SIDENAV.GIGIYENA' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n\n                  <div class=\"catalog-activ catalog-activ-six\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Og'izni parvarishlash</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Ayollar gigienasi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Dorilar katalogi</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Terlashga qarshi vositalarh</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Kattalar uchun taglikla</a>\n                              </div>\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters\">\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                <div class=\"shopping-menu-text\">\n                  <a href=\"#\" class=\"link-menu-katalog\">\n                    <span class=\"shop-left-icons\">\n                        <mdb-icon fas icon=\"pills\"></mdb-icon>\n                      <!-- <img src=\"assets/website/img/medical-icons/aed.png\" alt=\"\" > -->\n                    </span>\n                    <span class=\"shoping-menu-text-about\">{{'SIDENAV.KATALOG' | translate}}</span>\n                    <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\n                  </a>\n                  <div class=\"catalog-activ catalog-activ-sevn\">\n                    <div class=\"shopping-menu-product-cat\">\n                      <div class=\"row \">\n                        <div class=\"col-4 border-right-menu\" >\n                          <div class=\"wrap-shopping-menu\">\n                            <div class=\"shopping-menu\">\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\n                              </div>\t\t\t\t\t\t\t\t\n                              <div class=\"shopping-menu-text\">\n                                <a href=\"#\" class=\"catalog-link-drop\"  >Hammasini ko'rish</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-8\">\n                          <div class=\"row no-gutters \">\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                            <div class=\" col-lg-6 \" >\n                              <div class=\"drug-product \">\n                                <div class=\"drug-product-about\">\n                                  <div class=\"product-img\">\n                                    <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n                                  </div>\n                                  <div class=\"drud-name pt-2\">АРУТИМОЛ 0,25% 5 МЛ ГЛ.КАПЛИ</div>\n                                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                                  <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n                                </div>\n                                <div class=\"drug-product-shopping\">\n                                  <div class=\"row no-gutters\">\n                                    <div class=\"col-9\">\n                                      <div class=\"drug-product-buy\">\n                                        <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-3\">\n                                      <div class=\"drug-product-buy product-buy-border\">\n                                        <a href=\"#\"><span class=\"fa fa-exchange\"></span></a>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\t\t\t\t\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\t\t\t\t\t\t\t\t\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"container-a w-100\">\n              <div class=\"carousel-wrap\">\n                <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active w-100\">\n                      <img  src=\"assets/website/img/Новая папка (2)/slider-3.png\"  alt=\"First slide\" class=\"img-fluid\" style=\"width: 100%;height:auto;\">\n                      <div class=\"carousel-caption d-none d-md-block\">\n                      </div>\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img  src=\"assets/website/img/Новая папка (2)/slider-2.png\" alt=\"First slide\" class=\"img-fluid\" style=\"width: 100%;height:auto;\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"assets/website/img/Новая папка (2)/slider-1.png\"  alt=\"First slide\" class=\"img-fluid\" style=\"width: 100%;height:auto;\">\n                    </div>\n                  </div>\n                  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3\" style=\"border-left: 1px solid #EFECEC;\">\n            <div class=\"wrap-shoping-advertising\">\n              <div class=\"wrap-shopping-cost\" >\n                <div data-aos=\"fade-right\">\n                  <img  src=\"assets/website/img/reklama-1.png\" alt=\"\" class=\"img-fluid\"  style=\"height: 260px;\" >\n                </div>\n                <div>\t\n                  <img src=\"assets/website/img/reklama-2.png\" class=\"img-fluid\" style=\"height: 262px;\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section><!-- wrap-shopping-body -->\n  \n  \n  <app-best-offer></app-best-offer>\n  <app-with-sale></app-with-sale>\n  <app-import-pharm></app-import-pharm>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/home/import-pharm/import-pharm.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/home/import-pharm/import-pharm.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/home/with-sale/with-sale.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/home/with-sale/with-sale.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"wrap-best-offer\">\n    <div class=\"container-a p-0\">\n        <div class=\"catalog-teme\">\n            <div class=\"d-inline-block catalog-text\">Arzonlashtirilgan Dorilar</div>\n            <button class=\"shopping-button-all\">Hammasi <i class=\"fa fa-angle-right\"></i></button>\n        </div>\n        <div class=\"row\">\n\n\n            <div class=\"col-product \" *ngFor=\"let pharm of pharms\">\n                <div class=\"drug-product \">\n                    <div class=\"drug-product-about\">\n                        <div class=\"wrap-new-action-now\">\n                            <span>{{pharm.sale}}%</span>\n                        </div>\n                        <div class=\"product-img\">\n                            <img src=\"/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid\">\n                        </div>\n                        <div class=\"drud-name pt-2 \">{{pharm.name}}</div>\n                        <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n                        <div class=\"drug-product-cost\"><span>{{pharm.price * (1- pharm.sale/100)  }}</span>so'm-1 dona</div>\n                    </div>\n                    <div class=\"drug-product-shopping\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-9\">\n                                <div class=\"drug-product-buy\">\n                                    <button (click)=\"addBasket(pharm._id)\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</button>\n                                </div>\n                            </div>\n                            <div class=\"col-3\">\n                                <div class=\"drug-product-buy\">\n                                    <button routerLink=\"/about-pharm/{{pharm._id}}\">\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <div class=\"col-product \">\n          <div class=\"drug-product \" >\n            <div class=\"drug-product-about\">\n              <div class=\"product-img\">\n                <img src=\"assets/website/img/Новая папка (2)/7.jpg\" alt=\"\" class=\"img-fluid\" >\n              </div>\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n            </div>\n            <div class=\"drug-product-shopping\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-9\">\n                  <div class=\"drug-product-buy\">\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <div class=\"drug-product-buy product-buy-border\">\n                    <a href=\"#\"> \n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\t\t\t\t\n        </div> -->\n\n\n\n            <!-- <div class=\" col-product \" >\n          <div class=\"drug-product \">\n            <div class=\"wrap-new-action\"><span>new</span></div>\n            <div class=\"drug-product-about\">\n              <div class=\"product-img\">\n                <img src=\"assets/website/img/Новая папка (2)/4.jpg\" alt=\"\" class=\"img-fluid\" >\n              </div>\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n            </div>\n            <div class=\"drug-product-shopping\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-9\">\n                  <div class=\"drug-product-buy\">\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <div class=\"drug-product-buy product-buy-border\">\n                    <a href=\"#\">\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\t\t\t\t\n        </div> -->\n\n            <!-- <div class=\"col-product\">\n          <div class=\"drug-product \" >\n            <div class=\"drug-product-about\">\n              <div class=\"product-img\">\n                <img src=\"assets/website/img/Новая папка (2)/1.jpg\" alt=\"\" class=\"img-fluid\" >\n              </div>\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки - 60шт. </div>\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n            </div>\n            <div class=\"drug-product-shopping\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-9\">\n                  <div class=\"drug-product-buy\">\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <div class=\"drug-product-buy product-buy-border\">\n                    <a href=\"#\">\n                      <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\t\t\t\t\n        </div>\t -->\n\n\n            <!-- <div class=\"col-product \">\n          <div class=\"drug-product \" >\n            <div class=\"drug-product-about\">\n              <div class=\"product-img\">\n                <img src=\"assets/website/img/Новая папка (2)/1.jpg\" alt=\"\" class=\"img-fluid\" >\n              </div>\n              <div class=\"drud-name pt-2 \">АРУТИМОЛ таблетки  - 60шт.</div>\n              <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\n              <div class=\"drug-product-cost\"><span>53 990 </span>so'm-1 dona</div>\n            </div>\n            <div class=\"drug-product-shopping\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-9\">\n                  <div class=\"drug-product-buy\">\n                    <a href=\"#\"><span class=\"fa fa-shopping-cart\"></span> Savatga qo'shish</a>\n                  </div>\n                </div>\n                <div class=\"col-3\">\n                  <div class=\"drug-product-buy product-buy-border\">\n                    <a href=\"#\">\n                        <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\t\t\t\t\n        </div> -->\n\n\n        </div>\n    </div>\n</section>\n<!-- wrap-best-offer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/language/language.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/language/language.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select style=\"background-color: #FAFAFA; color: blue; padding: 10px; border: none\" #langSelect\n(change)=\"translate.use(langSelect.value)\">\n<option *ngFor=\"let lang of langs\" [value]=\"lang\"\n  [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n</select>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/navbar/navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/navbar/navbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Responsiv menu left -->\r\n<html lang=\"en\"> \r\n\r\n\r\n  <div class=\"modal left fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content scrollbar \"  id=\"style-1\" style=\"border-radius: 0;\">\r\n        <div class=\"modal-header text-center\">\r\n          <a href=\"#\" class=\"pl-5\"><img src=\"assets/website/img/Новая папка (2)/logo_orign (3).png\" alt=\"\" style=\"width: 100px;\" class=\"\"></a>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body p-0\">\r\n          <div class=\"\">\r\n            <div class=\"title bg-white\">\r\n               <!-- <a href=\"#\"><img src=\"img/Новая папка (2)/logo_orign (3).png\" alt=\"\"></a> -->\r\n            </div>\r\n            <ul class=\"menu bg-white\">\r\n              <li>\r\n                <span class=\"fa fa-map-marker\"></span>\r\n                <a href=\"#\">Bizning manzil</a>  \r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Dorilar katalogi</a>\r\n                <span class=\"shop-right-icons \"><i class=\"fa fa-angle-right\"></i></span>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"menu bg-white\">\r\n              <li>\r\n                <span class=\"fa fa-phone\"></span>\r\n                <a href=\"#\">Biz bilan bog'lanish</a>\r\n              </li>\r\n              <li>\r\n                <span class=\"fa fa-pencil-square-o\"></span>\r\n                <a href=\"#\">Savol va javoblar</a>\r\n              </li>\r\n              <li>\r\n                <span class=\"fa fa-bar-chart-o \"></span>\r\n                <a href=\"#\">Ommaviy oferta</a>\r\n              </li>\r\n              <li>\r\n                <span class=\"fa fa-language \"></span>\r\n                <a href=\"#\">Til</a>\r\n              </li>\r\n              <li>\r\n                <span class=\"fa fa-sign-in\"></span>\r\n                <a href=\"#\">Kirish  </a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"resposive-text-about\">\r\n              <div class=\"additional-information \">\r\n                <div class=\"\">\r\n                  Barcha savollaringiz bo’yicha o'zingizga ma’qul vaqtda, bizga qo'ng'iroq qiling: <span><i class=\"fa fa-phone\"></i> +998 99 900 76 77</span><br>\r\n                  E-pochta manzilingiz: <span  >support@lebazar.uz</span> \r\n                </div>\r\n                <div class=\"\">\r\n                  EcoPharm.uz: Dori-darmon mahsulotlari va boshqalar. \r\n                  Mahsulotni yetkazib berish Toshkent hududida amalga oshiriladi. Barcha huquqlar himoyalangan.  \r\n                </div>\r\n                <div>\r\n                  Ilovamizni o’rnating hamda xaridlarni oson amalga oshiring!\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Responsiv menu left End -->\r\n\r\n\r\n  \r\n\r\n<header>\r\n<div class=\"wrapper-head\" style=\"overflow: hidden\">\r\n    <div class=\"header-container container-a\" >\r\n      <div class=\"wrapper-log d-inline-block\">\r\n        <!-- <span class=\"fa fa-map-marker\"></span> -->\r\n        <mdb-icon fas icon=\"map-marker-alt\"  class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon>\r\n        <a href=\"#\">EcoPharma.uz</a>\t\r\n      </div> \r\n      <div class=\"sing-head \" >\r\n        <button routerLink = \"/admin\"><mdb-icon fas class=\"cyan-text \" size=\"2x\" icon=\"person-booth\"></mdb-icon></button>\r\n\r\n      </div>\r\n      <div class=\"sing-head \" >\r\n\r\n        <app-language></app-language>\r\n\r\n        <!-- <a href=\"#\"><img src=\"assets/website/img/uz-bayro.png\" alt=\"\" class=\"img-flag-uz\"> </a>\r\n        <a href=\"#\" ><img src=\"assets/website/img/russian-flag.png\" alt=\"\" class=\"img-flag-ru\"></a> -->\r\n      </div>\r\n      <div class=\"sing-head\" >\r\n        <!-- <div class=\"header-mes-icons telegram-icons\"> -->\r\n          <a href=\"#\" ><mdb-icon fab icon=\"telegram\" size=\"2x\"  class=\"cyan-text pr-3\" aria-hidden=\"true\"></mdb-icon></a>\r\n        <!-- </div> -->\r\n        <!-- <div class=\"header-mes-icons facebook-icons\"> -->\r\n          <a href=\"#\"  >\r\n              <mdb-icon fab icon=\"facebook-square\" size=\"2x\"  class=\"indigo-text pr-3\" aria-hidden=\"true\"></mdb-icon>\r\n            <!-- <span class=\"fa fa-facebook\" ></span> -->\r\n          </a>\t\r\n        <!-- </div> -->\r\n        <!-- <div class=\"header-mes-icons instagram-icons\"> -->\r\n          <a href=\"#\" >\r\n              <mdb-icon fab icon=\"instagram\" size=\"2x\"  class=\"red-text pr-3\" aria-hidden=\"true\"></mdb-icon>\r\n            <!-- <span class=\"fa fa-instagram\" ></span> -->\r\n          </a>\t\t\t\t\t\t\t\r\n        <!-- </div> -->\r\n        <!-- <div class=\"header-mes-icons twitter-icons\">\t\t\t\t\t\t\t -->\r\n          <a href=\"#\" >\r\n              <mdb-icon fab icon=\"twitter-square\"  size=\"2x\"  class=\"cyan-text pr-3\" aria-hidden=\"true\"></mdb-icon>\r\n            <!-- <span class=\"fa fa-twitter\" ></span> -->\r\n          </a>\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\" sing-head\" >\r\n        <a href=\"#\" ><span class=\"fa fa-phone\"></span> +998 99 666 66 66</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" header-logo-tem \" >\r\n    <div class=\" d-inline-block logo \">\r\n      <a href=\"#\"><img src=\"assets/website/img/Новая папка (2)/logo_orign (3).png\" alt=\"\" class=\"img-fluid eco-logo\"></a>\r\n      <button type=\"button\" class=\"button-bars-icon\" data-toggle=\"modal\" data-target=\"#exampleModal\"><span class=\"bars-icons fa fa-bars\"></span></button>\r\n     \r\n      <!-- <button\r\n      data-pushbar-target=\"left\" \r\n       class=\"button-bars-icon\"><span class=\"bars-icons fa fa-bars\"></span></button> -->\r\n    </div>\r\n    <div class=\"wrap\">\r\n      <div class=\"search\">\r\n        <input type=\"text\" #name class=\"searchTerm\" placeholder=\"What are you looking for?\">\r\n        <button  (click)=\"search(name.value)\"   class=\"searchButton\"><i class=\"fa fa-search\"></i></button>\r\n      </div>\r\n    </div>\r\n    <div class=\"wrap-shopping\">\r\n\r\n      <!-- KIRISH -->\r\n\r\n      <div *ngIf=\"!data\" class=\" shop-card-icon shop-card-icon-border\">\r\n        <div data-toggle=\"modal\" data-target=\"#myModall\">\t\r\n          <span class=\"fa fa-user users-icon\" ></span>\r\n          <div class=\"carzinka-icons-text\"  >{{'NAVBAR.SIGN' | translate}}</div>\r\n        </div>\r\n      </div>   \r\n\r\n      <!-- Mening Profilim add-->\r\n      \r\n      <div *ngIf = \"data\" class=\" shop-card-icon shop-card-icon-border\" >\r\n        <nav class=\"tt-nav\" id=\"js-tt-nav\">\r\n          <ul  class=\"tt-nav__list\">\r\n            <li class=\"tt-nav__item\" id=\"tt-media\">\r\n              <a routerLink=\"/my-profil\" class=\"tt-nav__link\">\r\n                <span class=\"fa fa-user users-icon\" ></span>\r\n                <div class=\"carzinka-icons-text\">{{'NAVBAR.PROFIL' | translate}}</div>\r\n              </a>\r\n              <ul class=\"tt-nav__submenu\">\r\n                <li><a routerLink=\"/my-profil\"><span class=\"fa fa-user\"></span> Mening profilim</a></li>\r\n                <li><a routerLink=\"/my-profil/my-orders\"><span class=\"fa fa-clock-o\"></span> Buyurtmalar ro'yxati</a></li>\r\n                <li><a routerLink=\"/my-profil/my-adress\"><span class=\"fa fa-map-marker\"></span> Manzillarim ro'yxati</a></li>\r\n                <li><a routerLink = \"/my-profil/my-should\"><span class=\"fa fa-star\"></span> Saralangan dorilar</a></li>\r\n                <li><a routerLink=\"/my-profil/my-pharms\"><span class=\"fa fa-eye\"></span> Ko'rilgan maxsulotlar</a></li>\r\n                <li><a href=\"#!\"><span class=\"fa fa-money disabled\"></span> Hamyonim:<span class=\"font-weight-bold\">0 b</span></a></li>\r\n                <li><a href=\"#!\"><span class=\"fa fa-sign-out\"></span> Tizimdan chiqish</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n     \r\n      <!-- Mening Profilim end -->\r\n      <a routerLink = \"/comparison\">\r\n        <div class=\"shop-card-icon shop-comparison\" >\r\n          <span class=\"fa fa-bar-chart\" ></span> \r\n          <!-- <sup>0</sup> -->\r\n          <div class=\"carzinka-icons-text\" >{{'NAVBAR.TAQQOSLASH' | translate}}</div>\r\n        </div>\r\n      </a>\r\n      <a routerLink=\"/basket\">\r\n        <div class=\"shop-card-icon\">\r\n          <span  class=\"fa fa-shopping-cart\"></span><sup *ngIf=\"a!=0\">{{a}}</sup>\r\n          <div class=\"carzinka-icons-text\">{{'NAVBAR.SAVAT' | translate}}</div>\r\n        </div>\r\n      </a>\r\n      \r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n<div class=\"padding-all\"></div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n<div class=\"modal fade\" id=\"myModall\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabell\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\" >\r\n      <div class=\"modal-content modal-registration\">\r\n        <div class=\"modal-header border-b-0\" style=\"border-bottom: 0;\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          </button>\r\n          <div class=\"w-100 text-center pt-4\">\r\n            <img src=\"assets/website/img/Новая папка (2)/logo_orign (3).png\" alt=\"\" style=\"width: 150px;\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body py-0\" >\r\n          <p>Ro'yxatdan o'tish uchun telefon raqamingizni kiriting va kodni tasdiqlang</p>\r\n          <form>\r\n            <label>\r\n              <div class=\"w-100 modal-input\">\r\n\r\n                  <!-- <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Enter Phone Number\" #name2 prefix=\"+998 \" mask=\"(00) 000 00 00\"  >\r\n                    </mat-form-field> -->\r\n                  <input type=\"text\" #number prefix=\"+998 \" mask=\"(00) 000 00 00\" class=\"form-control\" placeholder=\"Enter Phone Number\" mdbInput>\r\n                <!-- <input style=\"width: 80px;\" type=\"text\" maxlength=\"55\" class=\"input-field\" value=\"+998\"> -->\r\n                <!-- <input type=\"text\" maxlength=\"255\" class=\"input-field\" type=\"hidden\" placeholder=\"Telefon raqamingiz\" style=\"padding: 8px 28px;\"> -->\r\n              </div>\r\n            </label>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer border-t-0\" style=\"border-top: 0;\">\r\n          <button type=\"button \"  data-toggle=\"modal\" data-target=\"#myModall-2 \" class=\"btn w-100\">Yuborish</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\"  id=\"myModall-2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabell\" aria-hidden=\"true\" style=\"    background-color: rgba(0,0,0,.4);\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content w-75 m-auto\">\r\n        <div class=\"modal-header p-0\" style=\"border-bottom: 0;\">\r\n          <h3 class=\"modal-title text-center w-100 text-black\" id=\"exampleModalLabel\" >\r\n          {{number.value}}</h3>\r\n        </div>\r\n        <div class=\"modal-body p-0\" >\r\n          <p class=\"text-dark\">Raqamingiz to'g'ri ko'rsatilganmi ?</p>\r\n        </div>\r\n        <div class=\"modal-footer pt-2 pb-4 \" style=\"border-top: 0;\">\r\n          <button type=\"button \" class=\"btn \" data-dismiss=\"modal\"><span class=\"fa fa-edit\" ></span> O'zgartirish</button>\r\n          <button type=\"button \" data-toggle=\"modal\" data-target=\"#myModall-3 \"  class=\"btn \"><i class=\"fa fa-check\"></i> Ha</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"myModall-3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabell\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content modal-registration\">\r\n        <div class=\"modal-header border-b-0\" style=\"border-bottom: 0;\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          </button>\r\n          <div class=\"w-100 text-center pt-4\">\r\n            <img src=\"assets/website/img/Новая папка (2)/logo_orign (3).png\" alt=\"\" style=\"width: 150px;\">\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body py-0\" >\r\n          <p>Sizga kodni SMS orali jo'natdik</p>\r\n          <form>\r\n            <label>\r\n              <div class=\"w-100 modal-input\">\r\n                  <input type=\"text\" #kod placeholder=\"Enter kod\">\r\n                <!-- <input type=\"text\" maxlength=\"255\" class=\"form-control\" type=\"hidden\" placeholder=\"SMSda kelgan kodni kiriting\"  > -->\r\n              </div>\r\n            </label>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer py-2\" style=\"border-top: 0;\">\r\n          <button type=\"button \" (click)=\"addUser(number.value, kod.value)\"  class=\"btn w-100 px-5 outline-none\">Tasdiqlash</button>\r\n        </div>\r\n        <div class=\"w-100 text-center\">Siz kodni qabul qildingizmi? Raqam noto'g'rimi? <br>\r\n        </div>\r\n\r\n        <div class=\"w-100 text-center\" style=\"padding-bottom: 50px;\"><a href=\"#\" class=\"text-success\">Kodni qaytadan kiriting</a></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  </html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/order-pharm/order-pharm.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/order-pharm/order-pharm.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil\">\n  <div class=\"container p-0\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h3>Buyurtmani rasmiylashtirish</h3>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"profil-about\">\n          <div class=\"h5  py-2 text-uppercase\">Raqamni tasdiqlash *</div>\n\n          <div class=\"form-row\">\n            <div class=\"col-md-6 mb-3\">\n              <input *ngIf=\"!data\" type=\"text\" #number (change)=\"food = number.value\" class=\"form-control is-valid\"  \n                placeholder=\"+998 (__) (___-__-__)\" prefix=\"+998 \" mask=\"(00) 000 00 00\"required>\n              <input *ngIf=\"data\" type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\"\n                placeholder=\"{{person[0].number}}\" required>\n              <div *ngIf=\"!data\" class=\"valid-feedback text-dark\">\n                Aktivatsiya kodini olish uchun telefon raqamingizni kiriting.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <div *ngIf=\"activ\"><input  type=\"number\" #kod class=\"form-control is-valid\" id=\"validationServer01\"\n                placeholder=\"Enter kod\" required><br><button (click)=\"registUser(food, kod.value)\" class=\"btn btn-success\">Enter</button></div>\n                \n              <button *ngIf=\"!data && !activ\" (click)=\"verifynumber()\" class=\"btn btn-success w-100\">Aktivatsiya kodini olish</button>\n            \n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"profil-about\">\n          <div class=\"h5  py-2 text-uppercase\">Bog'lanish uchun</div>\n         \n            <div class=\"form-row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"validationServer02\">Ism va sharifingiz</label>\n                <input *ngIf=\"!data\" type=\"text\" #name (change)=\"foo = name.value\" class=\"form-control \"   placeholder=\"...\"\n                  required>\n                   \n                <input *ngIf=\"data\" type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\"\n                  placeholder=\"{{person[0].name}}\" required>\n                \n              </div>\n             \n             \n              <!-- <div class=\"col-md-6 mb-3\">\n                <label for=\"validationServer02\">Familiyangiz</label>\n                <input *ngIf=\"!data\" type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"...\"\n                  required>\n                <input *ngIf=\"data\" type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\"\n                  placeholder=\"{{person[0].lastname}}\" required>\n              </div> -->\n\n\n            </div>\n            <!-- <div class=\"form-row\">\n                <div class=\"col-md-12 mb-3\">\n                  <label for=\"validationServer02\">Elektron pochta manzilingiz</label>\n                  <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"sh.xoltorayev@gmail.com\"  required>\n                </div>\n              </div> -->\n           \n        </div>\n        <div class=\"profil-about\">\n          <div class=\"h5 py-2 text-uppercase\">Yetkazib berish turi *</div>\n          <div class=\"checkbox-div\">\n            <div class=\"row\">\n\n              <div class=\"col-sm-6\">\n                <div class=\"pretty p-default p-round accordion\">\n                  <input (click)=\"bool1()\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n                  <div class=\"state p-success-o\">\n                    <label>Uy yoki ofisga yetkazib berish</label>\n                  </div>\n                </div>\n\n              </div>\n\n\n              <div class=\"col-sm-6\">\n                <div class=\"pretty p-default p-round w-100\">\n                  <input (click)=\"bool()\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n                  <div class=\"state p-success-o\">\n                    <label>Xaridorni o'zi kelib olish</label>\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n          </div>\n        </div>\n        <div class=\"profil-about panel\">\n          <form *ngIf=\"!bol\">\n            <div class=\"form-row\">\n\n              <div class=\"col-md-6 mb-3\">\n                <select class=\"form-control is-valid\" #fog style=\"background-image: none;\" name=\"\" id=\"\">\n                  <option value=\"0\" selected disabled> Tumanni kiriting</option>\n                  <option value=\"Olmazor tumani\"> Olmazor tumani</option>\n                  <option value=\"Yunusobod tumani\"> Yunusobod tumani</option>\n                  <option value=\"Chilonzor tumani\"> Chilonzor tumani</option>\n                  <option value=\"Yashnobod tumani\"> Yashnobod tumani</option>\n                  <option value=\"Mirzo Ulug'bek tumani\"> Mirzo Ulug'bek tumani</option>\n                  </select>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <input type=\"text\" #street  class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Ko'cha *\"\n                  required>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <input type=\"text\" #home class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Uy raqami *\"\n                  required>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <input type=\"text\" #number class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Qavat, honadon \" required>\n              </div>\n              <!-- <div class=\"col-md-6 mb-3\">\n                <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Podyezd \"\n                  required>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Xonadon*\"\n                  required>\n              </div> -->\n\n                <button (click)=\"select(fog.value, street.value, home.value, number.value)\" class=\"btn btn-success  \">Tasdiqlash</button>\n\n\n            </div>\n          </form>\n        </div>\n\n\n        <div *ngIf=\"bol\" class=\"profil-about panel\">\n          <h3>Bizning manzil: Toshkent shahri, Chilonzor tumani. <br> Mo'ljal: Chilonzor metro <br> Telefon:; (71)\n            230-17-71</h3>\n        </div>\n\n\n        <div class=\"profil-about\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-6\">\n              <a (click)=\"pay1()\">\n                <div class=\"my-2 wrap-profil-about-text relative\">\n                  <div class=\"h5\">Terminal orqali to'lov</div>\n                  <p>To'lov dorixonada va yetkazib berish xodimlari tomonidan buyurtma egasiga topshirilgan vaqtda\n                    o'zbek so'mida qabul qilinadi</p>\n                  <div class=\"d-inline-block\"><img src=\"assets/website/img/card.png\"></div>\n                  <img class=\"\" *ngIf=\"icon\" src=\"assets/website/img/pt1.png\" alt=\"\"\n                    style=\"width:30px;position: absolute;right: 40px;bottom: 30px;\">\n                </div>\n\n              </a>\n            </div>\n\n            <div class=\"col-lg-6\">\n              <a (click)=\"pay2()\">\n                <div class=\"my-2 wrap-profil-about-text relative\">\n                  <div class=\"h5\">Naqt to'lash</div>\n                  <p>To'lov dorixonada va yetkazib berish xodimlari tomonidan buyurtma egasiga topshirilgan vaqtda\n                    o'zbek so'mida qabul qilinadi</p>\n                  <div class=\"d-inline-block\"><img src=\"assets/website/img/money-bag.png\" alt=\"\"></div>\n                  <img class=\"\" *ngIf=\"icon1\" src=\"assets/website/img/pt1.png\" alt=\"\"\n                    style=\"width:30px;position: absolute;right: 40px;bottom: 30px;\">\n                </div>\n              </a>\n            </div>\n\n            <div class=\"col-lg-6 \">\n              <a (click)=\"pay()\">\n                <div class=\" my-2 relative wrap-profil-about-text\">\n                  <div class=\"h5\">Onlayn to'lov tizimi orqali</div>\n                  <p>To'lov dorixonada va yetkazib berish xodimlari tomonidan buyurtma egasiga topshirilgan vaqtda\n                    o'zbek so'mida qabul qilinadi</p>\n\n                  <img *ngIf=\"paycom\" class=\"\" src=\"assets/website/img/pt1.png\" alt=\"\"\n                    style=\"width:30px;position: absolute;right: 40px;bottom: 30px;\">\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"paycom\" class=\"profil-about\">\n          <div class=\"h6 py-2 text-uppercase\">To'lov turini tanlang</div>\n          <div class=\"checkbox-div\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n\n\n                <div class=\"pretty p-default p-round d-inline-block\">\n                  <input (click)=\"click()\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n\n                  <div class=\"state p-success-o\">\n                    <label><img src=\"assets/website/img/payme.svg\" alt=\"\"></label>\n                  </div>\n                </div>\n\n\n                <div class=\"pretty p-default p-round d-inline-block\">\n                  <input (click)=\"payme()\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n\n                  <div class=\"state p-success-o\">\n                    <label><img src=\"assets/website/img/payme.svg\" alt=\"\"></label>\n                  </div>\n                </div>\n\n\n                <!-- <div class=\"pretty p-default p-round d-inline-block\">\n                      <input  type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n                    \n                    <div class=\"state p-success-o\">\n                      <label><img src=\"assets/website/img/payme.svg\" alt=\"\" ></label>\n                    </div>\n                  </div>\n                  <div class=\"pretty p-default p-round d-inline-block\">\n                      <input   type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios111\" value=\"option2\">\n                    <div class=\"state p-success-o\">\n                      <label><img src=\"assets/website/img/payme.svg\" alt=\"\" ></label>\n                    </div>\n                  </div> -->\n\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"profil-about\">\n          <div class=\"h5  py-2 text-uppercase\">Buyurtmaga izohingizni qoldiring * </div>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"col-md-12 mb-3\">\n                <textarea name=\"\" type=\"text\" id=\"\" class=\"form-control is-valid\" id=\"validationServer01\"\n                  placeholder=\"Mo'jal , Siz bilan bog'lanish uchun qo'shimcha telefon raqami va boshqa qo'shimcha malumotlar...\"\n                  style=\"min-height: 100px;\"></textarea>\n              </div>\n            </div>\n          </form>\n        </div>\n\n      </div>\n\n\n\n      <div class=\"col-lg-4 mt-3\">\n        <div class=\"bg-white card-product-about\" >\n          <div class=\"pl-3 pt-3\">\n            <div class=\"h4 text-dark \"> Buyurtmalar ro'yxati</div>\n          </div>\n\n\n          <div *ngFor=\"let pharm of pharms, let i=index\"\n            class=\"row justify-content-center align-items-center d-flex py-2 card-product-border\">\n            <div class=\"col-3 text-right\">\n              <img src=\"/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid w-100\">\n            </div>\n            <div class=\"col-9\">\n              <p>{{pharm.name}}</p>\n              <div class=\"d-inline-block\">{{rate[i]}} dona x <span class=\"font-weight-bold text-black \">\n                  {{pharm.price}} so'm\n                </span> </div>\n            </div>\n          </div>\n\n          <div class=\"p-3\">\n            <h6>Tanlangan to‘lov usuli va yetkazib berish turi</h6>\n\n            <div><b>Yetkazib berish : </b></div>\n            <div> {{manzil}}</div>\n            <div *ngIf=\"!bol\">\n              <div class=\"text-dark py-2\"> <b>Manzil :</b> </div>\n\n              <div>{{address}}</div>\n\n\n            </div>\n            <div class=\"text-dark py-2\"><b>To‘lov usuli: </b> </div>\n            <div>{{tolov}}</div>\n            <div *ngIf=\"paycom\">\n              <p><b>To'lov sistemasi : </b></p>\n              <p>{{system}}</p>\n            </div>\n            <hr>\n            <div class=\"pr-3\"> Jami: <span class=\"text-dark font-weight-bold float-right\">{{sum}} so'm</span></div>\n            <hr>\n            <button  *ngIf=\"!data\" (click)=\"order(foo, food)\"  class=\"btn btn-success text-uppercase w-100\" style=\"letter-spacing: 1px;\"> Buyurtmani rasmiylashtirish</button>\n            <button  *ngIf=\"data\" (click)=\"order(person[0].name, person[0].number)\"  class=\"btn btn-success text-uppercase w-100\" style=\"letter-spacing: 1px;\"> Buyurtmani Rasmiylashtirish</button>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/order-site/order-site.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/order-site/order-site.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboute-eco-pharma bg-white\" style=\"font-size: 18px;\">\t\n    <div class=\"container p-0\">\t\n      <div style=\"padding: 30px 0;\">\t\n        <h3 class=\"py-2\">Ommaviy oferta </h3>\n        <div class=\"row\">\t\n          <ol type=\"1\" class=\"w-100\">\n            <li>\"LEAN SAVDO LOYIHALARI\" mas'uliyati cheklangan jamiyati (bundan buyon matnda LEBAZAR deb yuritiladi) ushbu taklifni qabul qilgan shaxslarga www.lebazar.uz sayti orqali Mahsulotlar buyurtmalarini olish va ularni etkazib berishni tashkil etish (quyida «Shartnoma») orqali quyida ko'rsatilgan harakatlar amalga oshirilishini ta'minlaydi.</li>\n            <li>Ushbu hujjat ochiq taklif va www.lebazar.uz sayti orqali tovarlarga buyurtma olish uchun axborot xizmatlarini taqdim etish va ularni etkazib berishni tashkil etish bo'yicha shartnoma tuzish bo'yicha taklif mavjud.\n            ShARTLARI VA TUZILIShI.</li>\n            <li>LEBAZAR - SUPPLIER bilan shartnoma tuzgan va Ta'minlovchining mollarini lebazar.uz veb-saytida taqdim etgan yuridik shaxs;</li>\n            <ul class=\"pl-4\">\n              <li>Agent / Shopper, ShoperApp orqali olingan mijoz buyurtmalarini qabul qilish, etkazib beruvchining do'konida buyurtma berish va xaridorga mahsulot etkazib berish bo'yicha harakatlarni amalga oshiruvchi LeBazar bilan shartnoma tuzgan shaxs;</li>\n              <li>Yetkazib beruvchilar - libazar tizimi orqali aholiga tovarlarni sotadigan va sotilgan tovarlar uchun jismoniy shaxslardan mablag'lar oladigan yuridik shaxs;</li>\n              <li>Qabul qiluvchi / Xaridor - LeBazar tizimidan yakuniy iste'mol qilish uchun Ta'minlovchidan tovarlar sotib olgan va lebazar.uz veb-saytida joylashtirilgan ommaviy oferta shartlarini qabul qiladigan shaxs;</li>\n              <li>LEBAZAR tizimi LEBAZAR tomonidan taqdim etilgan tashkiliy, axborot va texnik echimlarning apparat-dasturiy kompleksi bo'lib, mijozlar buyurtmalarini lebazar.uz veb-saytida qabul qilishni va Agentga buyurtmalar yuborishni ta'minlaydi;</li>\n              <li>Tovarlar - ro'yxat LEBAZAR tomonidan lebazar.uz saytida ko'rsatilgan Ta'minlovchiga tegishli bo'lgan tovarlar;</li>\n              <li>Buyurtma - lebazar.uz saytida tuzilgan va LEBAZAR tizimida saqlanadigan, xaridorning identifikatorini, ro'yxatini, miqdorini, tovar narxini va boshqa ma'lumotlarni o'z ichiga olgan elektron xaridor tomonidan yuborilgan elektron buyurtma;</li>\n              <li>Tekshiruv - etkazib beruvchi tomonidan chop etilgan va mol uchun to'lovdan so'ng mijozga berilgan hujjat;</li>\n              <li>Plastik bank kartasi bank tomonidan kartochka egasining hisob raqamining mavjudligini tasdiqlovchi va naqd pulsiz to'lovni amalga oshirish huquqini beruvchi bank tomonidan beriladigan shaxsiylashtirilgan to'lov vositasidir.</li>\n              <li>Qabul qilish - taklif qabul qilingan shaxsning uni qabul qilishiga javob;\n              Takliflar - bir kishiga, bir nechta o'ziga xos shaxslarga yoki noma'lum shaxslar doirasiga taklifnoma, shartnoma shartlarining barcha shartlarini o'z ichiga oladigan, taklif qiladigan shaxsning xohishi (taklif etuvchisi) ko'rilgan taklif bilan belgilangan shartlar bo'yicha shartnoma tuzishga taklif qiladi;</li>\n              <li>Buyurtmani mijozga etkazib berish uchun yetkazib berish - kuryerlik xizmatlari.</li>\n            </ul>\n          </ol>\n\n          <ol>\n            <li>Shartnoma mavzusi</li>\n            <ul class=\"pl-4\">\n              <li>Shartnoma LeBazar tizimi orqali etkazib berish va yetkazib berish tartibini belgilaydi va aniq bo'lmagan odamlar doirasiga yuborilgan ochiq taklif (bundan keyin «taklif» deb ataladi).</li>\n              <li>Ushbu taklifni qabul qilish - bu lebazar.uz saytida buyurtma qilingan tovarlarni xaridor tomonidan to'lashdir.</li>\n              <li>LEBAZAR veb-sayti orqali sotib olingan mahsulotlar Yetkazib beruvchining do'konida ko'rsatilgan narxdan yuqori bo'lgan mahsulotni qaytarish uchun aktsiyalar bilan qoplanmaydi va Ta'minlovchining Buyurtmachiga berilgan Buyurtmachining sodiqlik kartasi qabul qilinmaydi.</li>\n            </ul>\n          </ol>\n          <ol>\n            <li>BUYURTMA.</li>\n            <ul class=\"pl-4\">\n              <li>\n              Mahsulotlar LeBazar tizimidan foydalanib, www.lebazar.uz saytidan xaridor tomonidan buyurtma qilinadi. Buyurtma berish paytida, Xaridor quyidagi ma'lumotlarni taqdim etishi shart:\t</li>\n              <ul class=\"pl-5\">\n                <li>familiyasi, ismi, otasining ismi (rus tilida);</li>\n                <li>tovarlarning haqiqiy yetkazib berish manzili;</li>\n                <li>aloqa telefon raqami;</li>\n                <li>tovarlarning nomi, tovar, tovar turi, sotib olingan tovarlar guruhiga kiritilgan mahsulotlarning soni, tovarlar narxi;</li>\n                <li>Qabul qiluvchilarning fikri bo'yicha qo'shimcha ma'lumotlar.</li>\n              </ul>\n              <li>Buyurtmani joylashtirishda Xaridchilar tomonidan taqdim etilgan ma'lumotlarning mazmuni va aniqligi uchun LeBazar javobgar emas.</li>\n              <li>Buyurtma berish paytida berilgan ma'lumotlarning to'g'riligi uchun xaridor javobgardir.</li>\n              <li>Xaridor tomonidan Buyurtmani to'lash Ochiq taklif shartlari bilan Qabul qiluvchilarning kelishuvini anglatadi. Lebazar.uz saytida taqdim etiladigan barcha axborot materiallari faqat ma'lumot uchun berilgan va tovarning muayyan xususiyatlari va tavsifi haqida ishonchli ma'lumotni to'liq etkazib bera olmaydi.</li>\n              <li>Buyurtmachining mol-mulki va xususiyatlari bilan bog'liq har qanday savol bo'lsa, Buyurtmani joylashtirishdan oldin u maslahat uchun yetkazib beruvchiga murojaat qilish kerak.</li>\n              <li>Xaridor o'zingiz haqida ro'yxatdan o'tish ma'lumotlarini tahrirlash huquqiga ega.</li>\n            </ul>\n          </ol>\n          <ol>\n            <li>To'lov tartibi</li>\n            <ul class=\"pl-4\">\n              <li>Tovarlarni to'lash naqd pulsiz to'lov bilan, lebazar.uz saytidan, shuningdek buyurtmani olganidan keyin naqd pul bilan amalga oshiriladi.</li>\n              <li>Naqd pulsiz to'lovlar faqat mijozlar tomonidan quyidagi tarzda amalga oshiriladi:</li>\n              <ul class=\"pl-5\">\n                <li>LBazar tizimidagi mijozning shaxsiy hisobvarag'idan mijozning bank plastik kartasidan pul mablag'larini o'tkazish yo'li bilan;</li>\n                <li>chakana to'lovlar tizimi (onlayn to'lov) orqali;</li>\n\n              </ul>\n              <li>Buyurtmaning umumiy qiymati Buyurtmachini lebazar.uz saytida Buyurtmani tasdiqlash vaqtida etkaziladi.</li>\n              <li>\tLebazar.uz veb-saytida ko'rsatilgan tovarlar va etkazib berish narxlarining narxi LEBAZAR tomonidan bir tomonlama ravishda Xaridni xabardor qilmasdan o'zgartirilishi mumkin.</li>\n              <li>Veb-saytda ko'rsatilgan narxlar etkazib beruvchining shelfidagi narxlarga mos kelmasligi mumkin. Bunday hollarda tovarlarni yetkazib berish uchun eng so'nggi va to'g'ri narx - etkazib beruvchining (supermarketning) shelfida ko'rsatilgan va chekda ko'rsatilgan narx hisoblanadi.</li>\n              <li>Buyurtmani to'lash Buyurtmachi tomonidan Buyurtma qiymatining 100% qiymatini ushbu taklifda ko'rsatilgan usullardan foydalanib buyurtmani tasdiqlaganidan keyin o'tkazilishi kerak. Naqd pul to'lashda, mijoz Agent tomonidan Agentga to'lanadi.</li>\n              <li>Tovarlarni rasmiylashtirish va buyurtmanomani to'plashdan so'ng yetkazib beruvchining naqd pul mablag'lari summasi bepul yetkazib berish shartlarini qo'llash uchun asosdir. Ya'ni buyurtmaning buyurtma miqdori minimal chegarani o'zgartirib, oshgan bo'lsa, etkazib berish miqdori bepul jo'natiladi. Agar tovarlarni yig'ish jarayonida naqd pulni qabul qilish summasi minimal buyurtma miqdoridan past bo'lsa, buyurtma miqdori yetkazib berish shartlariga muvofiq to'lanadi.</li>\n              <li>Qabul qiluvchidan qaytarish rad etilganligi, ya'ni m holatlarga asos bo'lganda amalga oshiriladi.</li>\n              <ul class=\"pl-5\">\n                <li>\ttovarlarni to'liq yetkazib berish;</li>\n                <li>buyurtma bo'yicha ko'rsatilmagan tovarlarni etkazib berish;</li>\n                <li>etkazib berilayotgan mahsulot sifati yomonlashtirilgan sifatsiz mahsulot.</li>\n                <li>shartnomada nazarda tutilgan boshqa hollar.</li>\n              </ul>\n              <li>Tovarlarni rad etish sanasidan boshlab 10 ish kuni ichida quyidagi tartibda qaytarib berish muddati:</li>\n              <ul class=\"pl-5\">\n                <li>Buyurtmaning to'liq bekor qilingan taqdirda Ta'minlovchiga to'langan plastik bank kartochkasida:</li>\n                <li>LEBAZARni Lebazar tizimidagi xaridorning virtual hisobiga bonuslar shaklida kreditlash orqali, buyurtman qisman bekor qilingan taqdirda 1 bonus ball 1 sum.</li>\n              </ul>\n            </ul>\n          </ol>\n          <ol>\n            <li>Mahsulotlarni yetkazib berish</li>\n            <ul class=\"pl-4\">\n              <li>Tovarlarni etkazib berish Toshkent shahrida uchinchi shaxslar ishtirokida amalga oshiriladi.</li>\n              <li>Tovarlarni etkazib berish muddati Tovarlarni to'lashdan so'ng mijozning shaxsiy hisobida ko'rsatiladi.</li>\n              <li>Agar Buyurtma etkazib berish vaqtida Buyurtmani yoki uning qismini rad etsa, Xaridor yukni etkazib berish narxini to'laydi va buyurtmani do'konga qaytarib beradi, tovarni qabul qilish paytida, Agentning aybiga qarab, xaridor noto'g'ri miqdorda, assortiment yoki komplektni etkazib berganligi aniqlangan hollar bundan mustasno.</li>\n              <li>LeBazar-ning xaridorga mol-mulkni topshirish majburiyati Agent Agentga Buyurtmachini etkazib bergan vaqtida amalga oshirilgan deb hisoblanadi.</li>\n              <li>Buyurtmani olganidan so'ng, Buyurtmachi tovarlar mahsulotning e'lon qilingan miqdori, assortimenti va komplektligiga muvofiqligini tekshirish, shuningdek, tovarlarning saqlash muddatini cheklangan saqlash muddati bo'lgan tovarlarga tekshirishga majburdir.</li>\n              <li>Da'volarni ko'rib chiqish. Yetkazib beriladigan tovarlar Xaridchiga va xaridor bo'lmagan taqdirda - Xaridor tomonidan Buyurtma Qabul qiluvchi sifatida taqdim etgan yoki ko'rsatgan har qanday shaxsga beriladi. Mollarni topshirish paytida, Kurer, firibgarlik holatlarini oldini olish uchun oluvchining identifikatsiya hujjatlarini talab qilishga haqlidir.</li>\n              <li>Tovarlarning egalik qilishi, shuningdek, tasodifiy yo'qotish yoki unga zarar etkazish xavfi tovarni topshirish va unga chegirmalar orqali xaridorga o'tadi. Buyurtma tovarni topshirish vaqtida etkazib berilayotgan deb hisoblanadi va Xaridga murojaat qiladi. Tovarni qabul qilish, Xaridor Buyurtmani bajarilishini tasdiqlaydi.</li>\n            </ul>\n          </ol>\n          <ol>\n            <li>E'tirozlarni ko'rib chiqish</li>\n            <ul class=\"pl-4\">\n              <li>LEBAZAR mijozlar talablarini quyidagilar bilan bog'liq holda ko'rib chiqadi:</li>\n              <ul class=\"pl-5\">\n                <li>tovarlarni to'liq yetkazib berish;</li>\n                <li>buyurtma bo'yicha ko'rsatilmagan tovarlarni etkazib berish;</li>\n                <li>sifati yetkazib berish jarayonida yomonlashtirilgan sifatsiz tovarlar.</li>\n                <li>agar tovar narxi LeBazar tizimida o'zgarmagan bo'lsa, tovarlarni etkazib beruvchi do'konida ko'rsatilgan narxdan yuqori narxda sotib olish.</li>\n              </ul>\n              <li>Bunday hollarda LEBAZAR etkazib berilmaydigan tovarlarni yetkazib berishni tashkil qiladi, tovarni tegishli mijozning LeBazar tizimidagi arizasi bilan almashtiradi. Agar ushbu shartlardan birini amalga oshirish mumkin bo'lmasa, mablag'lar 6.1-bandda ko'zda tutilgan tartibda mijozga qaytariladi. Shartnomaning 4-bo'limi.</li>\n              <li>Buyurtma qabul qilinganda Buyurtma hech qanday da'vo qo'zg'atsa, tovar To'liq va to'g'ri deb qabul qilinadi.</li>\n              <li>Sotib olingan tovarlar sifati va mol-mulkni olish va sotib olishdan kelib chiqadigan talablar quyidagi tartibda ko'rib chiqiladi:</li>\n              <ul class=\"pl-4\">\n                <li>1. Quyidagi toifadagi tovarlarni qaytarish faqatgina olingan kundan keyin 2 soat ichida amalga oshirilishi mumkin:</li>\n                <ul class=\"pl-5\">\n                  <li>- Sabzavotlar va mevalar</li>\n                  <li>- tuxum / sut va sut mahsulotlari</li>\n                  <li>- go'sht va go'sht mahsulotlari</li>\n                  <li>- baliq va baliq mahsulotlari</li>\n                  <li>- non va non mahsulotlari</li>\n                  <li>- kek va shirinliklar</li>\n                  <li>- muzlatilgan ovqatlar</li>\n                  <li>Ushbu muddat tugagach, LeBazar yuqorida ko'rsatilgan narsalarni qaytarmaslik huquqiga ega.</li>\n                  <li>Bunday hollarda mijoz iste'molchilarni himoya qilish to'g'risidagi qonunga va tegishli yetkazib beruvchining qoidalariga muvofiq etkazib beruvchiga to'g'ridan-to'g'ri so'rov yuborish orqali tovarlarni qaytarib berish huquqiga ega.</li>\n                </ul>\n              </ul>\n            </ul>\n            <li>Boshqa toifadagi tovarlarni qaytarib olish mahsulotni sotib olganidan keyin 24 soat ichida amalga oshirilishi mumkin</li>\n            <ul class=\"pl-4\">\n              <li>3. Agar ular ochilgan va qisman ishlatilsa, qaytarib berilmaydigan yoki almashtirilmaydigan toifadagi toifalar</li>\n              <ul class=\"pl-5\">\n                <li>- Shaxsiy gigiena vositalari.</li>\n              </ul>\n            </ul>\n          </ol>\n          <ol>\n            <li>Javobgarlik</li>\n            <ul class=\"pl-4\">\n              <li>Pudratchi javobgar emas:</li>\n              <ul class=\"pl-5\">\n                <li>telekommunikatsiya tarmoqlarining sifati, shuningdek, telekommunikatsiya xizmatlarini taqdim etishdagi kechikish va uzilishlar uchun, LEBAZAR xatosi tufayli kelib chiqadi.</li>\n                <li>LEBAZAR va Xaridchilar tomonidan uchinchi shaxslar tomonidan taqdim etilgan (taqdim etadigan) telekommunikatsiya xizmatlarining uzilishlari bilan bog'liq xizmatlar ko'rsatishda uzilishlar va uzilishlar.</li>\n                <li>agar LEBAZAR xizmatlarining sifati kam bo'lsa, mijoz taklifining shartlarini noto'g'ri bajarilishi natijasida paydo bo'lgan.</li>\n                <li>har qanday sabab tufayli, shu jumladan, xizmatdan foydalanishda yoki ishlatib bo'lmagani yoki xatolar, kamchiliklar, ishdagi uzilishlar, funktsiyalardagi o'zgarishlar, ma'lumotlarni uzatishda LEBAZAR tizimining ishlashida kechikishlar va boshqa sabablar tufayli kelib chiqqan har qanday zarar uchun. s.</li>\n                <li>LEBAZAR tizimining har qanday (vaqtinchalik va / yoki qisman) noto'g'ri ishlashiga, uzilishiga, to'xtatilishiga yoki mavjud emasligiga nisbatan.</li>\n                <li>mijoz tomonidan parol, ID, boshqa axborotni oshkor qilganligi uchun etkazilgan zarar uchun.</li>\n                <li>o'zingiz haqingizdagi noto'g'ri ma'lumotlarning tartibini joylashtirganda Qabul qiluvchining xabarini etkazib berish shartlarini buzganlik uchun.</li>\n                <li>lebazar.uz saytida sotib olingan Mahsulotni xaridor tomonidan noto'g'ri ishlatish uchun.</li>\n              </ul>\n              <li>LEBAZAR buyurtma berishdan bosh tortgan taqdirda, xaridorga yangi Buyurtmani berishdan bosh tortish huquqini o'zida saqlab qoladi.</li>\n              <li>LeBazar har qanday mijozga pulni zudlik bilan qaytarib berishni taklif qilishdan bosh tortish huquqini o'zida saqlab qoladi, agar u ularni to'g'ri va samarali ishlashga qodir bo'lmasa, deb hisoblasa.</li>\n              <li>Xaridor taqdim etilgan ma'lumotlarning mazmuni va aniqligi uchun javobgardir.</li>\n            </ul>\n            <li>FAVQULODDA VAZIYAT</li>\n            <ul class=\"pl-4\">\n              <li>Tomonlar ushbu shartnoma bo'yicha o'z majburiyatlarini bajarmaslik yoki noto'g'ri bajarish uchun javobgar emaslar, agar bunday bartaraf Tomonlarga bog'liq bo'lmagan, ayniqsa tabiiy ofatlar, texnik noto'g'ri yondashuvlar, yong'inlar, qo'zg'olonlar, inqiloblar, harbiy harakatlar, yuqorida keltirilgan holatlardan ta'sirlangan deb tan olingan hududlarda yuzaga keladigan karantin yoki boshqa ofatlar e'lon qilinadi.</li>\n            </ul>\n            <li>Shubhalarni bartaraf etish tartibi</li>\n            <ul class=\"pl-4\">\n              <li>Shartnomani bajarish jarayonida yuzaga keladigan barcha kelishmovchiliklar kelishuv yo'li bilan tomonlar tomonidan kelishuv yo'li bilan ko'rib chiqiladi.</li>\n              <li>Shartnoma tuzilmagan taqdirda nizolar O'zbekiston Respublikasining amaldagi qonunchiligida belgilangan tartibda ko'rib chiqiladi.</li>\n              <li>Ushbu Shartnomada ko'zda tutilmagan barcha sharoitlarda Bitimning Tomonlari O'zbekiston Respublikasining amaldagi qonunchiligiga asosan amal qiladi.</li>\n            </ul>\n            <li>Malumotni tashkil etish</li>\n            <ul class=\"pl-4\">\n              <li>LEBAZAR O'zbekiston Respublikasining qonunlariga muvofiq xaridor to'g'risidagi shaxsiy ma'lumotlarning xavfsizligini ta'minlashga, Shartnomani bajarish bilan bog'liq bo'lmagan uchinchi tomonlarga, shuningdek, tegishli konfidentsiallik rejimiga rioya qilmasdan Qabul qiluvchilarning ma'lumotlariga xabar bermaslik majburiyatini oladi.</li>\n              <li>Ushbu Oferta shartlariga muvofiq Shartnomani tuzish uchun, shuningdek, LEBAZAR tomonidan Shartnomani to'g'ri bajarilishi uchun, Xaridchi LEBAZARga va LEBAZAR tomonidan tasdiqlangan shaxslarga shaxsiy ma'lumotlarini qayta ishlashga ruxsat beradi. LEBAZAR shaxsiy ma'lumotlarning maxfiyligini ta'minlashga sodiqdir.</li>\n              <li>Xaridor Shartnomani tuzish va bajarish uchun Xaridning shaxsiy ma'lumotlari kurerlik xizmatlari uchun maxfiylik sharti bilan LEBAZARga berilishi mumkinligini anglaydi va qabul qiladi.</li>\n              <li>LEBAZAR xaridor bilan telefon orqali suhbatlar yozish huquqiga ega.</li>\n            </ul>\n            <li>Intellektual mulkni himoya qilish.</li>\n            <ul class=\"pl-4\">\n              <li>LEBAZAR veb-saytida joylashtirilgan barcha matn va grafik tasvirlar LEBAZARning mulki hisoblanadi. LEBAZARning roziligisiz bunday ma'lumotlarning va / yoki tasvirlarning uchinchi tomonlaridan foydalanish LEBAZARning huquqlarini buzilishi va O'zbekiston Respublikasining amaldagi qonunchiligida nazarda tutilgan javobgarlikka sabab bo'lishi mumkin.</li>\n            </ul>\n            <li>Boshqa shartlar</li>\n            <ul class=\"pl-4\">\n              <li>Ushbu Shartnoma bilan tartibga solinmagan xaridor va LEBAZAR o'rtasidagi munosabatlar O'zbekiston Respublikasi qonunlari bilan tartibga solinadi.</li>\n              <li>Sotib oluvchidan LEBAZARga biron bir savol yoki shikoyat bo'lsa, u ularni quyidagi usullardan birida e'lon qilishi mumkin:</li>\n              <ul class=\"pl-5\">\n                <li>LEBAZAR hotlineni chaqirish 71 200 11 12;</li>\n                <li>Toshkent shahri, Chilonzor tumani, 1-chorra, 6-uy, 100115, Toshkent sh.</li>\n                <li>LEBAZAR: info@lebazar.uz elektron manziliga xat yozing</li>\n              </ul>\n              <li>LEBAZAR har qanday vaqtda, ushbu Ofertaning matnini www.lebazar.uz veb-saytida yangi tahrirda joylashtirish orqali ushbu Oferta shartlariga o'zgartirish kiritishi mumkin. O'zgartirishlar Buyurtmachilar va uchinchi tomonlar uchun Ofertaning matnini yangi nashrda www.lebazar.uz LEBAZARda yoki Oferta'da ko'rsatilgan sana joylashtirilgan paytdan boshlab kuchga kiradi.</li>\n              <li>Www.lebazar.uz saytining \"To'lov va LeBazar xizmatlari\" bo'limi taklifning ajralmas qismi hisoblanadi.</li>\n            </ul>\n          </ol>\n        </div>\n      </div> \n    </div>\n  </div>\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/pharm-service/pharm-service.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/pharm-service/pharm-service.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboute-eco-pharma bg-white\" style=\"font-size: 18px;\">\n    <div class=\"container p-0\">\n      <div style=\"padding: 30px 0;\">\n        <h3 class=\"py-2\">To'lovlar va Ecopharma xizmatlari </h3>\n        <div class=\"row\">\n          <ol type=\"1\" class=\"w-100\">\n            <li class=\"py-2\">Biz quyidagilarni qabul qilamiz:</li>\n            <ul  class=\"pl-4\">\n              <li>PayPal to'lov tizimidan foydalangan holda OnLine kartalari (UzCard)</li>\n              <li>Naqd pul</li>\n              <li>Hisobdagi bonus ballari (agar mavjud bo'lsa)</li>\n              <li>Xalqaro viza va Master karta</li>\n            </ul>\n            <li class=\"py-2\">LeBazar xizmatlari</li>\n          </ol>\n          <div class=\"w-100 pl-4\">Buyurtmani qayta ishlash, shakllantirish va etkazib berish LeBazar xizmatining narxiga kiritilgan.</div>\n          <ol class=\"w-100\">\n            <li class=\"py-2\">Rejalashtirilgan yetkazib berish:</li>\n          </ol>\n          <div class=\"pl-4\">Jadvalga ko'ra etkazib berish Buyurtmani joylashtirishda ko'rsatilgan vaqt oralig'ida amalga oshiriladi. Agar buyurtma miqdori 75000 so'mdan oshsa, yetkazib beriladigan xizmatlarning qiymati 5000 so'mni tashkil qiladi. Buyurtma miqdori 75000 so'mdan kam bo'lgan hollarda etkazib berish narxi 8000 so'mni tashkil etadi. Yetkazib berish 15 daqiqadan ko'proq kechikish bilan amalga oshirilsa, etkazib berish xizmatlari uchun to'lov olinmaydi.</div>\n          <ol class=\"w-100\">\n            <li class=\"py-2\">Shoshilinch yetkazib berish:</li>\n          </ol>\n          <div class=\"w-100 pl-4\">Shoshilinch taslim buyurtma shakllanganidan keyin 60 minut ichida amalga oshiriladi. Xat vaqti buyurtma vaqtida aks etadi (+ -10 daqiqa). Favqulodda yetkazib berish narxi 15 000 so'm. Ekspressni yetkazib berish 15 daqiqadan ko'proq kechiktirilsa, etkazib berish xizmatlari uchun to'lov olinmaydi..</div>\n          <ol class=\"w-100\">\n            <li class=\"py-2\">Yuk tashish buyurtmalarining narxi 15000 so'mdan kam bo'lgan holda 10 000 so'mni tashkil etadi.</li>\n            <li class=\"py-2\">Men birinchi marta buyurtma berdim va ular menga keltirmadilar.</li>\n          </ol>\n          <div class=\"w-100 pl-4\">Aziz do'stlarim. Agar siz birinchi marta buyurtma bergan bo'lsangiz, bizning operatorimiz tomonidan qo'ng'iroq paytida uni tasdiqlashingiz kerak. Siz buyurtma berganingizdan so'ng bizning operatorimizning taklifiga javob berishingizni so'raymiz. Chet eldan buyurtma bergan bo'lsangiz, iltimos, O'zbekiston bo'yicha aloqa raqamini kiriting. Agar biz kontakt ma'lumotlarini ishlatish bilan bog'lana olmasak, o'z xohishimiz bilan buyurtma bo'yicha buyurtma berish huquqini saqlab qo'yamiz yoki buyurtmani to'liq bekor qilamiz.</div>\n          <ol class=\"w-100\">\n            <li class=\"py-2\">6.Buyurtma og'irligi</li>\n          </ol>\n          <div class=\"w-100 pl-4 py-2\">Buyurtma chegarasi 10 kg. Har bir qo'shimcha kilogramm yuk uchun qo'shimcha haq 500 so'm.</div>\n          <div class=\"w-100 pl-4\">\n            Agar sizda savol bo'lsa, bizga <span class=\"text-success\"> 99 908 76 77 </span> raqamiga qo'ng'iroq qilishingiz mumkin\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/pharms/pharms.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/pharms/pharms.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"drug-list\">\r\n\r\n  <div class=\"drug-list-catalog\">\r\n    <div class=\"container p-0\">\r\n      <!-- <a href=\"#\">Suyak-muskul tizimi</a>\r\n      <a href=\"#\">Suyak-muskul tizimi</a>\r\n      <a href=\"#\">Suyak-muskul tizimi</a>\r\n      <a href=\"#\">Suyak-muskul tizimi</a> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"container p-0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 \">\r\n        <div class=\"list-group \">\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action disabled font-weight-bold text-dark\" tabindex=\"-1\" aria-disabled=\"true\">Toifalar <span class=\"fa fa-angle-down text-dark font-weight-bold float-right\"\t>\t</span></a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action \">Suyak-muskul tizimi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Shamollashga qarshi dorilar</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Xazm qilish tizimi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\r\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Qon-tomir siatemasi</a>\r\n        </div>\r\n        <div class=\"drug-checkbox\">\r\n          <div class=\"font-weight-bold text-dark drug-checkbox-tem \">Bo'linish turlari  <span class=\"fa fa-angle-down text-dark font-weight-bold float-right\"\t>\t</span>\r\n          </div>\t\t\t\t\t\t\t\t\t\r\n          <div class=\"checkbox-div\">\r\n            <div class=\"pretty p-default p-round w-100 \">\r\n              <input type=\"checkbox\" >\r\n              <div class=\"state p-success-o\">\r\n                <label>Yangiliklar</label>\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\t\t\t\r\n            <div class=\"pretty p-default p-round w-100\">\r\n              <input type=\"checkbox\" />\r\n              <div class=\"state p-success-o\">\r\n                <label>Eng ko'p sotilganlar</label>\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\t\t\t\r\n            <div class=\"pretty p-default p-round w-100\">\r\n              <input type=\"checkbox\" />\r\n              <div class=\"state p-success-o\">\r\n                <label>Chegirmalar</label>\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\t\t\t\r\n            <div class=\"pretty p-default p-round w-100\" >\r\n              <input type=\"checkbox\" />\r\n              <div class=\"state p-success-o\">\r\n                <label>Aksiyadagilar</label>\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\t\t\t\t\r\n            <div class=\"pretty p-default p-round w-100\">\r\n              <input type=\"checkbox\" />\r\n              <div class=\"state p-success-o\">\r\n                <label>Success</label>\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\r\n          </div>\t\t\t\t\t\t\t\t\t\t\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 \"   *ngFor=\"let pharm of pharms\">\r\n\r\n             \r\n              <div class=\"drug-product \">\r\n                <div class=\"wrap-new-action-now\" *ngIf = \"pharm.sale != 0\">\r\n                  <span >{{pharm.sale}}%</span>\r\n                </div>\r\n                <div class=\"finished-icon\" *ngIf=\"pharm.rate === 0\">\r\n                    <!-- <div class=\"wrap-new-action\"><span>AND</span></div>  -->\r\n                  <div class=\"finished-icon-text\"> Sotuvda qolmadi !</div>\r\n                \r\n                </div>\r\n      \r\n                <div routerLink=\"/about-pharm/{{pharm._id}}\" class=\"drug-product-about\">\r\n      \r\n                  <div class=\"product-img\">\r\n                    <img src=\"http://localhost:5000/images/{{pharm.logo}}\" alt=\"\" class=\"img-fluid\">\r\n                  </div>\r\n      \r\n                  <div class=\"drud-name pt-2 \">{{pharm.name}}</div>\r\n                  <div class=\"drug-text-about\">GM Pharmaceuticals Ltd , Грузия</div>\r\n                  <div class=\"drug-product-cost\"><span>{{pharm.price}} </span>so'm-1 dona</div>\r\n                </div>\r\n      \r\n      \r\n                <div class=\"drug-product-shopping\">\r\n                  <div class=\"row no-gutters\">\r\n                    <div class=\"col-9\">\r\n                      <div class=\"drug-product-buy\">\r\n                        <button (click)=\"addBasket(pharm._id, pharm.name)\"><span class=\"fa fa-shopping-cart\"></span> Savatga\r\n                          qo'shish</button>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                      <div class=\"drug-product-buy\">\r\n                        <button>\r\n                          <mdb-icon fas icon=\"angle-double-right\"></mdb-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n               \r\n            </div>\r\n\r\n            </div>\r\n            \r\n\r\n          \r\n\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/question-answer/question-answer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/question-answer/question-answer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboute-eco-pharma bg-white\" style=\"font-size: 18px;\">\t\n    <div class=\"container p-0\">\t\n      <div style=\"padding: 30px 0;\">\t\n        <h3 class=\"py-2\">Savol va javoblar </h3>\n        <div class=\"row\">\t\n          <ol type=\"1\" class=\"w-100\">\n            <li class=\"py-2\">Yuk tashish qancha?</li>\n            <ul  class=\"pl-4\">\n              <li>Buyurtma qiymati 75000 so'mdan rejalashtirilgan yetkazib berish 5000 so'mni tashkil qiladi va buyurtma vaqtida siz tanlagan rejaga muvofiq yetkaziladi.</li>\n              <li>Buyurtma miqdori 75000 so'mgacha bo'lgan tarif rejasida yetkazib berish qiymati 8000 so'mni tashkil etadi</li>\n              <li>Hisobdagi bonus ballari (agar mavjud bo'lsa)</li>\n              <li>Zarurat bo'lsa, xarajatlarni 15 000 so'mga etkazish kerak (buyurtmani olgan paytdan boshlab 60 daqiqa ichida).</li>\n            </ul>\n          </ol>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-1\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-2\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-1\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-2\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-1\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          <div class=\"py-3\">\n            <div class=\"question w-100 pl-4 text-dark\">Do'kondan qachon buyurtma bera olaman?</div>\n            <div class=\"response w-100 pl-4 py-2\">Biz har kuni 8:00 dan 23:00 gacha haftasiga etti kun buyurtmalar qabul qilamiz.</div>\n          </div>\n          \n        </div>\n      </div> \n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/search/search.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/search/search.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"drug-list\">\n\n   \n    <div class=\"container p-0\">\n      <div class=\"row\" *ngFor=\"let pharm of pharm\">\n         \n        <div class=\"col-lg-12\">\n          <div class=\"drug-about\">\n            <div class=\"row\">\t\n              <div class=\"col-md-5\">\n                <div class=\"drug-about-img\">\n                  <img src=\"https://secret-lake-41655.herokuapp.com/images/{{pharm.logo}}\"   class=\"img-fluid\">\n                </div>\n              </div>\n              <div class=\"col-md-7\">\n                <h3 class=\"font-weight-bold\">{{pharm.name}}</h3>\n                <div class=\"row no-gutters pt-2\">\t\n                  <div class=\"col-4 \"><span >Ishlab chiqaruvchi:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\">O'zbekiston</span></div>\n                </div>\n                <div class=\"row no-gutters\">\t\n                  <div class=\"col-4\">\t<span>Mavjudligi:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\">Mavjud</span></div>\n                </div>\n                <div class=\"row no-gutters\">\t\n                  <div class=\"col-4\">\t<span>Yetkazib berish:</span></div>\n                  <div class=\"col-4\"><span class=\"font-weight-bold\"> 1 soat ichida</span></div>\n                </div>\n                <hr>\n                <div class=\"drug-cost-about\">\n                  <h3 class=\" font-weight-bold d-inline-block\">{{pharm.price*q}}</h3>\n                  <span>\n                    <button class=\"drug-about-butto-left\" (click)= \"min()\" >-</button>\n                    <input type=\"text\" placeholder=\"{{q}} ta\">\n                    <button (click)=\"add()\" class=\"drug-about-butto-right\">+</button>\n                  </span>\n                </div>\n                <hr>\t\n                <div class=\"drug-product-shopping\">\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-12\">\n                      <div class=\"drug-product-buy\" style=\"background-color: #00A13C;color: #fff;\">\n                        <button (click)=\"abasket(pharm._id )\"> Sotib olish</button>\n                        <!-- <a routerLink=\"/basket\" class=\"text-white\"><span class=\"fa fa-shopping-cart\"></span> Sotib olish</a> -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <hr>\t\n            </div>\n            <div class=\"drug-about-wrap\">\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Foydalanish uchun ko'rsatmalar</h5>\n                <p> Qorish yoki ichak harakatining oldini olishni talab qiluvchi holatlar.</p>\n                <hr>\t\n              </div>\n\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                  <h5 class=\"font-weight-bold pb-2\">Farmakologik ta'sir\n                  <button (click) = \"uzb()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Uzb</button>\n                  <button (click) = \"rus()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Рус</button>\n                  <button (click) = \"eng()\" mdbBtn type=\"button\" color=\"info\" class=\"waves-light\" mdbWavesEffect>Узб</button>\n                  </h5>\n\n              </div>\n              <div>\n                <p *ngIf = \"uz\" >{{pharm.sort[0]}} </p>\n                <p *ngIf = \"ru\" >{{pharm.sort[1]}} </p>\n                <p *ngIf = \"en\">{{pharm.sort[2]}} </p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Farmakokinetikasi</h5>\n                <p>{{pharm.inform}}</p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Doza</h5>\n                <p >\n\n                  Preparat ishlab chiqaruvchining dispenseriga yuboriladi. Kattalar va 10 yoshdan oshgan bolalar 13-27 tomchi (5-10 mg); 4 yoshdan 10 yoshgacha bo'lgan bolalar 7-13 tomchi (2,5-5 mg). 4 yoshgacha bo'lgan bolalarga 250 mg / kg tana vaznini yoki 3 kg tana vazniga 2 tomchi miqdorini tavsiya etish tavsiya etiladi. Bolalar uchun preparatni oziq-ovqatga qo'shib qo'yish mumkin. Bolalar kuniga bir marta samarali bo'lishi mumkin. Agar kerak bo'lsa, bolada davolanish muddati uzaytirilishi mumkin, ammo uni uch kunga cheklash afzaldir.\n\n                  Pelikullarni kechqurun olish kerak, shunda kreslo ertalab edi.\n\n                  Katta miqdorda opioidlarni qabul qiluvchi saraton kasalliklarida ich qotib qolishdan saqlanish uchun shifokor retsepti bo'yicha foydalaniladi.\n                </p>\n                <hr>\t\n              </div>\n              <div class=\"\">\n                <h5 class=\"font-weight-bold pb-2\">Qo'llash mumkin bo'lmagan holatlar</h5>\n                <p >\n                  \n                  Ichak tutilishi; o'tkir yallig'lanishli ichak kasalliklari va qorin organlarining o'tkir kasalliklari (o'tkir appenditsit, ülseratif kolit, peritonit kabi); o'tkir qorin og'rig'i, yuqorida ko'rsatilgan o'tkir yallig'lanish kasalliklarini ko'rsatishi mumkin bo'lgan ko'ngil aynish va gijjalar bilan birga; og'ir suvsizlanish; Natriy pikosulfat va preparatning boshqa tarkibiy qismlariga yuqori sezuvchanlik.\n                </p>\n                <hr>\t\n              </div>\n               \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n \n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-addres/my-addres.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-addres/my-addres.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-about\" style=\"min-height: 240px; padding: 10px 20px;\">\n    <div class=\"h4 py-2\">Manzilga yetkazib berish</div>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col-md-6\">\n          <div class=\"mb-3\">\n            <label for=\"validationServer01\">Tumanni kiriting <span style=\"color: red;\"> *</span></label>\n            <!-- <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"Yunusobod\" value=\"\" required style=\"background-image: none;\"> -->\n            <select class=\"form-control is-valid\"  style=\"background-image: none;\" name=\"\" id=\"\">\n                <option value=\"0\" selected disabled> Tumanni kiriting</option>\n                <option value=\"1\"> Olmazor tumani</option>\n                <option value=\"2\"> Yunusobod tumani</option>\n              </select>\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"validationServer01\">Mo'ljal <span style=\"color: red;\"> *</span></label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"Shahriston metrosi\" value=\"\" required style=\"background-image: none;\">\n          </div>\n          <div class=\"mb-3\">\t\n            <label for=\"validationServer01\">Ko'cha nomi va uy raqami<span style=\"color: red;\"> *</span></label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"Amir Temur ko'chasi 117 uy\" value=\"\" required style=\"background-image: none;\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"mb-3\">\n            <label for=\"validationServer02\">Ismingiz<span style=\"color: red;\"> *</span></label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Shahzodbek\" value=\"\" required style=\"background-image: none;\">\n          </div>\n          <div class=\"mb-3\">\n            <label for=\"validationServer02\">Familyangiz<span style=\"color: red;\"> *</span></label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Xolto'rayev\" value=\"\" required style=\"background-image: none;\">\t\n          </div>\t\n          <div class=\"mb-3\">\n            <label for=\"validationServer02\">Telefon raqamingiz</label>\n            <input type=\"number\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"+998996770001\" value=\"\" disabled>\t\n          </div>\n        </div>\n      </div>\n      </form>\n      <div class=\"w-100\">\n\n        <button class=\"btn btn-success   w-100\" >Yuborish</button>\n      </div>\n\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-information/my-information.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-information/my-information.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n\n    <div class=\"profil-about\">\n      <div class=\"h5 font-weight-bold py-2 text-uppercase\" >Mening profilim</div>\n      <form>\n        <div class=\"form-row\">\n          <div class=\"col-md-6 mb-3\">\n            <!-- <label for=\"validationServer01\">Ismingiz</label> -->\n            <input type=\"text\" #name class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"{{person[0].name}}\"  required>\n            <div class=\"valid-feedback\">\n              Majburiy!\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <!-- <label for=\"validationServer02\">Familyangiz</label> -->\n            <input type=\"text\" #lastname class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"{{person[0].lastname}}\"  required>\n            <div class=\"valid-feedback\">\n              Majburiy!\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <!-- <div class=\"col-md-12 mb-3\">\n            <label for=\"validationServer02\">Elektron pochta manzilingiz</label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"sh.xoltorayev@gmail.com\"  required>\n            <div class=\"valid-feedback\">\n              Majburiy!\n            </div>\n          </div> -->\n          <div class=\"col-md-12 mb-3\">\n            <label for=\"validationServer01\">Telefon raqam</label>\n            <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"{{person[0].number}}\"  disabled>\n            <div class=\"valid-feedback\">\n              Majburiy!\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input is-invalid\" type=\"checkbox\" value=\"\" id=\"invalidCheck3\" required>\n            <label class=\"form-check-label\" for=\"invalidCheck3\">\n              Agree to terms and conditions\n            </label>\n            <div class=\"invalid-feedback\">\n              You must agree before submitting.\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-success w-100\" (click) = \"update(name.value, lastname.value)\"><span  style=\"font-size: 20px;\">\tSaqlash</span></button>\n      </form>\n    </div>\n \n\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-orders/my-orders.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-orders/my-orders.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-about\" style=\"min-height: 240px;\">\n    <a href=\"#\" class=\"px-2 text-success\"><span class=\"fa fa-history\"></span> Hammasi</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-pharms/my-pharms.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-pharms/my-pharms.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-about\" style=\"min-height: 240px;\">\n    <a href=\"#\" class=\"px-2 text-success\"><span class=\"fa fa-history\"></span> Hammasi</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-profil/my-profil.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-profil/my-profil.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil\">\n    <div class=\"container p-0\">\n      <div class=\"row\">\n        <div class=\"col-12\"><h3>Mening profilim</h3></div>\n        <div class=\"col-lg-3 \">\n          <div class=\"list-group  \">\n              <a routerLink=\"/my-profil\" class=\"list-group-item list-group-item-action\"><span class=\"fa fa-user\"></span> Mening Profilim<span class=\"fa fa-angle-right float-right\"></span></a>\n            <!-- <a routerLink=\"/my-profil\" class=\"list-group-item list-group-item-action disabled\">\n              <span class=\"fa fa-user\"></span> Mening Profilim <span class=\"fa fa-angle-right float-right\"></span></a> -->\n\n            <!-- <a routerLink=\"/my-profil/my-orders\" class=\"list-group-item list-group-item-action\"><span class=\"fa fa-clock-o\"></span> Buyurtmalar ro'yxati <span class=\"fa fa-angle-right float-right\"></span></a> -->\n\n            <!-- <a routerLink=\"/my-profil/my-adress\" class=\"list-group-item list-group-item-action\"><span class=\"fa fa-map-marker\"></span> Manzillarim ro'yxati<span class=\"fa fa-angle-right float-right\"></span></a> -->\n\n            <a routerLink=\"/my-profil/my-should\" class=\"list-group-item list-group-item-action\"><span class=\"fa fa-star\"></span> Kerakli dorilar<span class=\"fa fa-angle-right float-right\"></span></a>\n\n            <a routerLink=\"/my-profil/my-pharms\" class=\"list-group-item list-group-item-action\"><span class=\"fa fa-eye\"></span> Ko'rilgan maxsulotlar<span class=\"fa fa-angle-right float-right\"></span></a>\n\n            <button class=\"btn btn-success\" (click) = \"logOut()\">Log Out</button>\n\n          </div>\n        </div>\n\n        <div class=\"col-lg-9\">\n\n        <router-outlet></router-outlet>\n     \n</div>\n\n\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/users/my-should/my-should.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/users/my-should/my-should.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profil-about\" style=\"min-height: 240px;\">\n    <a href=\"#\" class=\"px-2 text-success\"><span class=\"fa fa-history\"></span> Hammasi</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/website/warranty/warranty.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/website/warranty/warranty.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  \n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let row\"># </td>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"progress\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.price}} </td>\n      </ng-container>\n  \n      <!-- Color Column -->\n      <ng-container matColumnDef=\"color\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.logo}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n  "

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-add-pharm/admin-add-pharm.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-add-pharm/admin-add-pharm.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFkZC1waGFybS9hZG1pbi1hZGQtcGhhcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-add-pharm/admin-add-pharm.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-add-pharm/admin-add-pharm.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminAddPharmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddPharmComponent", function() { return AdminAddPharmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/category */ "./src/app/shared/services/category.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let AdminAddPharmComponent = class AdminAddPharmComponent {
    constructor(srv, categoryService, route, router) {
        this.srv = srv;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.mode = 'create';
        this.categorys = [];
        this.getCategory();
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            sort: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            sort1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            sort2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            sale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            roomy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            inform: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.mode = "edit";
                this.postId = paramMap.get("id");
                this.srv.getPharm(this.postId).subscribe(postdata => {
                    let postData = postdata.json();
                    console.log(postData);
                    this.post = {
                        id: postData._id,
                        name: postData.name,
                        price: postData.price,
                        logo: postData.logo,
                        sale: postData.sale,
                        sort0: postData.sort[0],
                        sort1: postData.sort[1],
                        sort2: postData.sort[2],
                        roomy: postData.roomy,
                        inform: postData.inform,
                        rate: postData.rate
                    };
                    this.form.setValue({
                        name: this.post.name,
                        price: this.post.price,
                        image: this.post.logo,
                        sort: this.post.sort0,
                        sort1: this.post.sort1,
                        sort2: this.post.sort2,
                        sale: this.post.sale,
                        roomy: this.post.roomy,
                        inform: this.post.inform,
                        rate: this.post.rate
                    });
                });
            }
            else {
                this.mode = "create";
                this.postId = null;
            }
        });
    }
    onInputChange(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result; // rasm tanlanganda ko'rsatish
        };
        reader.readAsDataURL(file);
    }
    onSave() {
        if (this.mode == "create") {
            if (this.form.value.sale !== 0) {
                this.form.value.price = this.form.value.price * (1 - this.form.value.sale / 100);
            }
            this.srv.post(this.form.value.name, this.form.value.price, this.form.value.image, this.form.value.sort, this.form.value.sort1, this.form.value.sort2, this.form.value.sale, this.form.value.roomy, this.form.value.inform, this.form.value.rate);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Yangi dori qo\'shildi!',
            });
            this.form.reset();
        }
        else {
            this.srv.patchPharm(this.postId, this.form.value.name, this.form.value.price, this.form.value.image, this.form.value.sort, this.form.value.sort1, this.form.value.sort2, this.form.value.sale, this.form.value.roomy, this.form.value.inform, this.form.value.rate).subscribe(err => {
                if (!err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Dorini o\'zgartirishda xatolik yuz berdi'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        type: 'success',
                        title: 'Done',
                        text: 'Dorini o\'zgartirish muvaffaqtiyatli amalga oshirildi',
                    });
                }
                this.router.navigate(['/admin/pharms']);
            });
        }
    }
    getCategory() {
        this.categoryService.get().subscribe(res => {
            this.categorys = res.json();
        });
    }
};
AdminAddPharmComponent.ctorParameters = () => [
    { type: _shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"] },
    { type: src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminAddPharmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-add-pharm',
        template: __webpack_require__(/*! raw-loader!./admin-add-pharm.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-add-pharm/admin-add-pharm.component.html"),
        styles: [__webpack_require__(/*! ./admin-add-pharm.component.css */ "./src/app/admin/admin-add-pharm/admin-add-pharm.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"],
        src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminAddPharmComponent);



/***/ }),

/***/ "./src/app/admin/admin-category/admin-category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-category/admin-category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNhdGVnb3J5L2FkbWluLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-category/admin-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-category/admin-category.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCategoryComponent", function() { return AdminCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category */ "./src/app/shared/services/category.ts");



let AdminCategoryComponent = class AdminCategoryComponent {
    constructor(service) {
        this.service = service;
        this.category = [];
        this.getall();
    }
    ngOnInit() {
    }
    getall() {
        this.service.get().subscribe(res => {
            this.category = res.json();
        });
    }
    add(name, id) {
        this.service.post({ name: name, id: id }).subscribe(res => {
            alert("New Category Added");
            this.getall();
        });
    }
    deleteCategory(id) {
        this.service.delete(id).subscribe(res => {
            alert("Category Deleted");
            this.getall();
        });
    }
};
AdminCategoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
AdminCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-category',
        template: __webpack_require__(/*! raw-loader!./admin-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-category/admin-category.component.html"),
        styles: [__webpack_require__(/*! ./admin-category.component.css */ "./src/app/admin/admin-category/admin-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_category__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
], AdminCategoryComponent);



/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/orders */ "./src/app/shared/services/orders.ts");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/person */ "./src/app/shared/services/person.ts");





let AdminHomeComponent = class AdminHomeComponent {
    constructor(orderService, pharmService, personService) {
        this.orderService = orderService;
        this.pharmService = pharmService;
        this.personService = personService;
        this.orders = [];
        this.pharms = [];
        this.persons = [];
        this.getOrders();
        this.getPharms();
        this.getPersons();
    }
    getOrders() {
        this.orderService.get().subscribe(all => {
            this.orders = all.json();
            this.q = this.orders.length;
        });
    }
    getPharms() {
        this.pharmService.get().subscribe(all => {
            this.pharms = all.json();
            this.a = this.pharms.length;
        });
    }
    getPersons() {
        this.personService.get().subscribe(all => {
            this.persons = all.json();
            this.c = this.persons.length;
        });
    }
    ngOnInit() {
        setInterval(() => {
            this.getOrders();
            // if(this.q)
            // window.location.reload() 
        }, 10000);
        $(document).on('click', 'a.scroll-to-top', function (e) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            e.preventDefault();
        });
    }
};
AdminHomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"] },
    { type: src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_4__["PersonService"] }
];
AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__(/*! raw-loader!./admin-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-home/admin-home.component.html"),
        styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/admin-home/admin-home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"],
        src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_4__["PersonService"]])
], AdminHomeComponent);



/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-login/admin-login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth-service */ "./src/app/shared/services/auth-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let AdminLoginComponent = class AdminLoginComponent {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    ngOnInit() {
    }
    signIn(login, password) {
        this.srv.postLogin({ login: login, password: password }).subscribe(result => {
            var obj = result.json();
            if (obj.isAdmin || obj.isModerator) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'success',
                    title: 'Done',
                    text: 'Admin Hush kelibsiz!',
                });
                localStorage.setItem("token", obj.token);
                this.router.navigate(['admin']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'Login yoki parol xato',
                    footer: 'Iltimos tekshirib qaytadan tering  '
                });
            }
        });
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: __webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-login/admin-login.component.html"),
        styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin/admin-login/admin-login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/admin/admin-moderators/admin-moderators.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-moderators/admin-moderators.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW1vZGVyYXRvcnMvYWRtaW4tbW9kZXJhdG9ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-moderators/admin-moderators.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-moderators/admin-moderators.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminModeratorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModeratorsComponent", function() { return AdminModeratorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_moderators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/moderators */ "./src/app/shared/services/moderators.ts");



let AdminModeratorsComponent = class AdminModeratorsComponent {
    constructor(moderatorService) {
        this.moderatorService = moderatorService;
        this.moderators = [];
        this.number = "1";
        this.get();
    }
    get() {
        this.moderatorService.get().subscribe(res => {
            this.moderators = res.json();
            console.log(this.moderators);
        });
    }
    add(login, password, email) {
        this.moderatorService.post({ login: login, password: password, email: email, number: this.number }).subscribe(err => {
            alert("New Moderator Added");
            this.get();
        });
    }
    delete(id) {
        this.moderatorService.delete(id).subscribe(err => {
            alert("Moderator Deleted");
            this.get();
        });
    }
    ngOnInit() {
    }
};
AdminModeratorsComponent.ctorParameters = () => [
    { type: src_app_shared_services_moderators__WEBPACK_IMPORTED_MODULE_2__["ModeratorsServices"] }
];
AdminModeratorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-moderators',
        template: __webpack_require__(/*! raw-loader!./admin-moderators.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-moderators/admin-moderators.component.html"),
        styles: [__webpack_require__(/*! ./admin-moderators.component.css */ "./src/app/admin/admin-moderators/admin-moderators.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_moderators__WEBPACK_IMPORTED_MODULE_2__["ModeratorsServices"]])
], AdminModeratorsComponent);



/***/ }),

/***/ "./src/app/admin/admin-orders-success/admin-orders-success.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-orders-success/admin-orders-success.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW9yZGVycy1zdWNjZXNzL2FkbWluLW9yZGVycy1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-orders-success/admin-orders-success.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-orders-success/admin-orders-success.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdminOrdersSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersSuccessComponent", function() { return AdminOrdersSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/orders */ "./src/app/shared/services/orders.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");





let AdminOrdersSuccessComponent = class AdminOrdersSuccessComponent {
    constructor(orderService, pharmService) {
        this.orderService = orderService;
        this.pharmService = pharmService;
        this.orders = [];
        // pharms = [ [], []]
        // rate = [[], []];
        this.pharms = [];
        this.rate = [];
        this.get();
    }
    get() {
        this.orderService.getsuccess().subscribe(res => {
            this.orders = res.json();
            for (let i = 0; i < this.orders.length; i++) {
                this.pharms[i] = [];
            }
            for (let i = 0; i < this.orders.length; i++) {
                this.rate[i] = [];
            }
            for (let i = 0; i <= this.orders.length - 1; i++) {
                // let index=0;
                //   for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
                //           let pharmId = this.orders[i].pharms[j]
                //           this.pharmService.getPharm(pharmId).subscribe( res =>{
                //             this.pharms[i][index] = res.json();    
                //           this.rate[i][index] = this.orders[i].pharms[j+1];
                //           index++;
                //          }, error =>{
                //            console.log("Error   "  + error)
                //          })
                //   }
                for (let j = 0; j <= this.orders[i].pharms.length - 1; j++) {
                    let pharmsId = this.orders[i].pharms[j];
                    this.pharmService.getPharm(pharmsId).subscribe(res => {
                        this.pharms[i][j] = res.json();
                        this.rate[i][j] = this.orders[i].how[j];
                    });
                }
            }
            //  for (let i=0; i<=this.orders.length-1; i++) {
            //   let q=0;
            //     for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
            //            this.pharmService.getPharm(this.orders[i].pharms[j]).subscribe( res =>{
            //             this.pharms[i][q] = res.json();
            //             this.rate[i][q] = this.orders[i].pharms[j+1];
            //             q++;
            //            })
            //     }
            // }
        });
    }
    delete(id) {
        this.orderService.delete(id).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Buyurtma o\'chirildi!',
            });
            this.get();
        });
    }
    ngOnInit() {
    }
};
AdminOrdersSuccessComponent.ctorParameters = () => [
    { type: src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"] }
];
AdminOrdersSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-orders-success',
        template: __webpack_require__(/*! raw-loader!./admin-orders-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders-success/admin-orders-success.component.html"),
        styles: [__webpack_require__(/*! ./admin-orders-success.component.css */ "./src/app/admin/admin-orders-success/admin-orders-success.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"]])
], AdminOrdersSuccessComponent);



/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW9yZGVycy9hZG1pbi1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/orders */ "./src/app/shared/services/orders.ts");
/* harmony import */ var src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order-pharm */ "./src/app/shared/services/order-pharm.ts");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");







let AdminOrdersComponent = class AdminOrdersComponent {
    // q:any
    constructor(srv, orderService, pharmService, appService) {
        this.srv = srv;
        this.orderService = orderService;
        this.pharmService = pharmService;
        this.appService = appService;
        this.pharms = [];
        this.rate = [];
        // pharms = [ [], [] ];
        // rate=[[], [] ];
        this.farm = [[], []];
        this.son = [[], []];
        this.w = 0;
        this.orders = [];
        this.getall();
    }
    getall() {
        this.srv.get().subscribe((res) => {
            var obj = res.json();
            // this.orderService.mas = this.orders;
            if (this.orders.length < obj.length) {
                this.orders = obj;
                for (let i = 0; i < this.orders.length; i++) {
                    this.pharms[i] = [];
                }
                for (let i = 0; i < this.orders.length; i++) {
                    this.rate[i] = [];
                }
                for (let i = 0; i <= this.orders.length - 1; i++) {
                    // let index=0;
                    // for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
                    //         let pharmId = this.orders[i].pharms[j]
                    //         this.pharmService.getPharm(pharmId).subscribe( res =>{
                    //           this.pharms[i][index] = res.json();    
                    //         this.rate[i][index] = this.orders[i].pharms[j+1];
                    //         index++;
                    //        }, error =>{
                    //          console.log("Error   "  + error)
                    //        })
                    // }
                    for (let j = 0; j <= this.orders[i].pharms.length - 1; j++) {
                        let pharmsId = this.orders[i].pharms[j];
                        this.pharmService.getPharm(pharmsId).subscribe(res => {
                            this.pharms[i][j] = res.json();
                            this.rate[i][j] = this.orders[i].how[j];
                        });
                    }
                }
                this.appService.playSound();
            }
        });
    }
    accept(id, body) {
        this.srv.update(id, body).subscribe((res) => {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Done',
                    text: 'Buyurtma qabul qilindi!',
                });
                this.getall();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'Serverda xatolik'
                });
            }
        });
    }
    delete(id) {
        this.srv.delete(id).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Buyurtma o\'chirildi',
            });
            this.getall();
        });
    }
    ngOnInit() {
        setInterval(() => {
            this.getall();
            // window.location.reload() 
        }, 3000);
    }
};
AdminOrdersComponent.ctorParameters = () => [
    { type: src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_3__["OrderPharmService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }
];
AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-orders',
        template: __webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-orders/admin-orders.component.html"),
        styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
        src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_3__["OrderPharmService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"],
        src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]])
], AdminOrdersComponent);



/***/ }),

/***/ "./src/app/admin/admin-pharms/admin-pharms.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-pharms/admin-pharms.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBoYXJtcy9hZG1pbi1waGFybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-pharms/admin-pharms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-pharms/admin-pharms.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminPharmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPharmsComponent", function() { return AdminPharmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AdminPharmsComponent = class AdminPharmsComponent {
    constructor(srv) {
        this.srv = srv;
        this.pharms = [];
        this.displayedColumns = ['id', 'name', 'progress', 'color', 'rate', 'sale', 'roomy', 'edit', 'delete'];
        this.myFunction();
    }
    myFunction() {
        this.srv.get().subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.json());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    ngOnInit() { }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //  getall() {
    //    this.srv.get().subscribe( (res) =>{
    //      var obj = res.json();
    //      this.pharms = obj;
    //      console.log(this.pharms);
    //    }) 
    //  }
    delete(id) {
        this.srv.delete(id).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Dori o\'chirildi!',
            });
            this.myFunction();
        });
    }
};
AdminPharmsComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
], AdminPharmsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], AdminPharmsComponent.prototype, "sort", void 0);
AdminPharmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-pharms',
        template: __webpack_require__(/*! raw-loader!./admin-pharms.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-pharms/admin-pharms.component.html"),
        styles: [__webpack_require__(/*! ./admin-pharms.component.css */ "./src/app/admin/admin-pharms/admin-pharms.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"]])
], AdminPharmsComponent);



/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-users/admin-users.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
  \************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/person */ "./src/app/shared/services/person.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let AdminUsersComponent = class AdminUsersComponent {
    constructor(personService) {
        this.personService = personService;
        this.users = [];
        this.displayedColumns = ['id', 'number', 'name', 'address', 'delete'];
        // this.get()
        this.myFunction();
    }
    myFunction() {
        this.personService.get().subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.json());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    //  get() {
    //    this.personService.get().subscribe( res =>{
    //      this.users = res.json()
    //    })
    //  }
    delete(id) {
        this.personService.delete(id).subscribe(res => {
            alert("User Deleted");
            // this.get(); 
            this.myFunction();
        });
    }
    ngOnInit() {
    }
};
AdminUsersComponent.ctorParameters = () => [
    { type: src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], AdminUsersComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], AdminUsersComponent.prototype, "sort", void 0);
AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-users',
        template: __webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-users/admin-users.component.html"),
        styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin/admin-users/admin-users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__["PersonService"]])
], AdminUsersComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth-service */ "./src/app/shared/services/auth-service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





let AdminComponent = class AdminComponent {
    constructor(router, authSvc, service) {
        this.router = router;
        this.authSvc = authSvc;
        this.service = service;
        this.allow = false;
        this.authVerify();
    }
    ngOnInit() {
        $(document).ready(function ($) {
            "use strict"; // Start of use strict
            $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
                $("body").toggleClass("sidebar-toggled");
                $(".sidebar").toggleClass("toggled");
                if ($(".sidebar").hasClass("toggled")) {
                    $('.sidebar .collapse').collapse('hide');
                }
                ;
            });
            $(window).resize(function () {
                if ($(window).width() < 768) {
                    $('.sidebar .collapse').collapse('hide');
                }
                ;
            });
            $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
                if ($(window).width() > 768) {
                    var e0 = e.originalEvent, delta = e0.wheelDelta || -e0.detail;
                    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                    e.preventDefault();
                }
            });
            $(document).on('scroll', function () {
                var scrollDistance = $(this).scrollTop();
                if (scrollDistance > 100) {
                    $('.scroll-to-top').fadeIn();
                }
                else {
                    $('.scroll-to-top').fadeOut();
                }
            });
            $(document).on('click', 'a.scroll-to-top', function (e) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top)
                }, 1000, 'easeInOutExpo');
                e.preventDefault();
            });
        });
    }
    authVerify() {
        this.authSvc.get().subscribe((result) => {
            var object = result.json();
            if (!object.isAdmin && !object.isModerator) {
                this.router.navigate(['login']);
            }
            else {
                this.allow = true;
            }
        }, (err) => {
            this.router.navigate(['login']);
        });
    }
    alarm() {
        this.service.playSound();
    }
    logout() {
        localStorage.removeItem("token");
        this.router.navigate(['login']);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/orders-doing/orders-doing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/orders-doing/orders-doing.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVycy1kb2luZy9vcmRlcnMtZG9pbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/orders-doing/orders-doing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/orders-doing/orders-doing.component.ts ***!
  \**************************************************************/
/*! exports provided: OrdersDoingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDoingComponent", function() { return OrdersDoingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/orders */ "./src/app/shared/services/orders.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");





let OrdersDoingComponent = class OrdersDoingComponent {
    // pharms = [ [], [] ]
    // rate = [ [],  []];
    constructor(orderService, pharmService) {
        this.orderService = orderService;
        this.pharmService = pharmService;
        this.orders = [];
        this.pharms = [];
        this.rate = [];
        this.get();
    }
    get() {
        this.orderService.getdoing().subscribe(res => {
            this.orders = res.json();
            for (let i = 0; i < this.orders.length; i++) {
                this.pharms[i] = [];
            }
            for (let i = 0; i < this.orders.length; i++) {
                this.rate[i] = [];
            }
            for (let i = 0; i <= this.orders.length - 1; i++) {
                // let index=0;
                //   for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
                //           let pharmId = this.orders[i].pharms[j]
                //           this.pharmService.getPharm(pharmId).subscribe( res =>{
                //             this.pharms[i][index] = res.json();    
                //           this.rate[i][index] = this.orders[i].pharms[j+1];
                //           index++;
                //          }, error =>{
                //            console.log("Error   "  + error)
                //          })
                //   }
                for (let j = 0; j <= this.orders[i].pharms.length - 1; j++) {
                    let pharmsId = this.orders[i].pharms[j];
                    this.pharmService.getPharm(pharmsId).subscribe(res => {
                        this.pharms[i][j] = res.json();
                        this.rate[i][j] = this.orders[i].how[j];
                    });
                }
            }
            // for (let i=0; i<=this.orders.length-1; i++) {
            //   let q=0;
            //     for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
            //            this.pharmService.getPharm(this.orders[i].pharms[j]).subscribe( res =>{
            //             this.pharms[i][q] = res.json();
            //             this.rate[i][q] = this.orders[i].pharms[j+1];
            //             q++;
            //            })
            //     }
            // }
        });
    }
    accept(id, body) {
        this.orderService.patch(id, body).subscribe((res) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Buyurtma qabul qilindi!',
            });
            this.get();
        });
    }
    delete(id) {
        this.orderService.delete(id).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Buyurtma o\'chirildi!',
            });
            this.get();
        });
    }
    ngOnInit() {
    }
};
OrdersDoingComponent.ctorParameters = () => [
    { type: src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"] }
];
OrdersDoingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders-doing',
        template: __webpack_require__(/*! raw-loader!./orders-doing.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/orders-doing/orders-doing.component.html"),
        styles: [__webpack_require__(/*! ./orders-doing.component.css */ "./src/app/admin/orders-doing/orders-doing.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"]])
], OrdersDoingComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _website_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website/navbar/navbar.component */ "./src/app/website/navbar/navbar.component.ts");
/* harmony import */ var _website_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website/home/home.component */ "./src/app/website/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_admin_pharms_admin_pharms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-pharms/admin-pharms.component */ "./src/app/admin/admin-pharms/admin-pharms.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_add_pharm_admin_add_pharm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-add-pharm/admin-add-pharm.component */ "./src/app/admin/admin-add-pharm/admin-add-pharm.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "./src/app/admin/admin-category/admin-category.component.ts");
/* harmony import */ var _admin_admin_moderators_admin_moderators_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-moderators/admin-moderators.component */ "./src/app/admin/admin-moderators/admin-moderators.component.ts");
/* harmony import */ var _website_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./website/about-me/about-me.component */ "./src/app/website/about-me/about-me.component.ts");
/* harmony import */ var _website_pharm_service_pharm_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./website/pharm-service/pharm-service.component */ "./src/app/website/pharm-service/pharm-service.component.ts");
/* harmony import */ var _website_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./website/question-answer/question-answer.component */ "./src/app/website/question-answer/question-answer.component.ts");
/* harmony import */ var _website_order_site_order_site_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./website/order-site/order-site.component */ "./src/app/website/order-site/order-site.component.ts");
/* harmony import */ var _website_users_my_profil_my_profil_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./website/users/my-profil/my-profil.component */ "./src/app/website/users/my-profil/my-profil.component.ts");
/* harmony import */ var _website_users_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./website/users/my-information/my-information.component */ "./src/app/website/users/my-information/my-information.component.ts");
/* harmony import */ var _website_users_my_addres_my_addres_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./website/users/my-addres/my-addres.component */ "./src/app/website/users/my-addres/my-addres.component.ts");
/* harmony import */ var _website_users_my_pharms_my_pharms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./website/users/my-pharms/my-pharms.component */ "./src/app/website/users/my-pharms/my-pharms.component.ts");
/* harmony import */ var _website_users_my_should_my_should_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./website/users/my-should/my-should.component */ "./src/app/website/users/my-should/my-should.component.ts");
/* harmony import */ var _website_users_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./website/users/my-orders/my-orders.component */ "./src/app/website/users/my-orders/my-orders.component.ts");
/* harmony import */ var _website_pharms_pharms_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./website/pharms/pharms.component */ "./src/app/website/pharms/pharms.component.ts");
/* harmony import */ var _website_about_pharms_about_pharms_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./website/about-pharms/about-pharms.component */ "./src/app/website/about-pharms/about-pharms.component.ts");
/* harmony import */ var _website_basket_basket_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./website/basket/basket.component */ "./src/app/website/basket/basket.component.ts");
/* harmony import */ var _website_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./website/warranty/warranty.component */ "./src/app/website/warranty/warranty.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _website_order_pharm_order_pharm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./website/order-pharm/order-pharm.component */ "./src/app/website/order-pharm/order-pharm.component.ts");
/* harmony import */ var _admin_admin_orders_success_admin_orders_success_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-orders-success/admin-orders-success.component */ "./src/app/admin/admin-orders-success/admin-orders-success.component.ts");
/* harmony import */ var _admin_orders_doing_orders_doing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/orders-doing/orders-doing.component */ "./src/app/admin/orders-doing/orders-doing.component.ts");
/* harmony import */ var _website_search_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./website/search/search.component */ "./src/app/website/search/search.component.ts");
/* harmony import */ var _website_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./website/comparison/comparison.component */ "./src/app/website/comparison/comparison.component.ts");

































const routes = [
    { path: 'login', component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"] },
    {
        path: 'admin',
        //   loadChildren: './admin/admin.module#AdminModule'
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], children: [
            { path: '', component: _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_6__["AdminHomeComponent"] },
            { path: 'pharms', component: _admin_admin_pharms_admin_pharms_component__WEBPACK_IMPORTED_MODULE_7__["AdminPharmsComponent"] },
            { path: 'orders', component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__["AdminOrdersComponent"] },
            { path: 'orders-success', component: _admin_admin_orders_success_admin_orders_success_component__WEBPACK_IMPORTED_MODULE_29__["AdminOrdersSuccessComponent"] },
            { path: 'orders-doing', component: _admin_orders_doing_orders_doing_component__WEBPACK_IMPORTED_MODULE_30__["OrdersDoingComponent"] },
            { path: 'add-pharm', component: _admin_admin_add_pharm_admin_add_pharm_component__WEBPACK_IMPORTED_MODULE_9__["AdminAddPharmComponent"] },
            { path: 'update/:id', component: _admin_admin_add_pharm_admin_add_pharm_component__WEBPACK_IMPORTED_MODULE_9__["AdminAddPharmComponent"] },
            { path: 'category', component: _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_11__["AdminCategoryComponent"] },
            { path: 'moderators', component: _admin_admin_moderators_admin_moderators_component__WEBPACK_IMPORTED_MODULE_12__["AdminModeratorsComponent"] },
            { path: 'users', component: _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_27__["AdminUsersComponent"] }
        ]
    },
    {
        path: "", component: _website_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], children: [
            { path: "", component: _website_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: "about", component: _website_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__["AboutMeComponent"] },
            { path: 'pharm-service', component: _website_pharm_service_pharm_service_component__WEBPACK_IMPORTED_MODULE_14__["PharmServiceComponent"] },
            { path: 'question-answer', component: _website_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_15__["QuestionAnswerComponent"] },
            { path: 'order-site', component: _website_order_site_order_site_component__WEBPACK_IMPORTED_MODULE_16__["OrderSiteComponent"] },
            { path: 'my-profil', component: _website_users_my_profil_my_profil_component__WEBPACK_IMPORTED_MODULE_17__["MyProfilComponent"], children: [
                    { path: '', component: _website_users_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_18__["MyInformationComponent"] },
                    { path: 'my-adress', component: _website_users_my_addres_my_addres_component__WEBPACK_IMPORTED_MODULE_19__["MyAddresComponent"] },
                    { path: 'my-pharms', component: _website_users_my_pharms_my_pharms_component__WEBPACK_IMPORTED_MODULE_20__["MyPharmsComponent"] },
                    { path: 'my-should', component: _website_users_my_should_my_should_component__WEBPACK_IMPORTED_MODULE_21__["MyShouldComponent"] },
                    { path: 'my-orders', component: _website_users_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_22__["MyOrdersComponent"] }
                ] },
            { path: 'pharms', component: _website_pharms_pharms_component__WEBPACK_IMPORTED_MODULE_23__["PharmsComponent"] },
            { path: 'about-pharm/:id', component: _website_about_pharms_about_pharms_component__WEBPACK_IMPORTED_MODULE_24__["AboutPharmsComponent"] },
            { path: 'basket', component: _website_basket_basket_component__WEBPACK_IMPORTED_MODULE_25__["BasketComponent"] },
            { path: 'warranty', component: _website_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_26__["WarrantyComponent"] },
            { path: 'order-pharm', component: _website_order_pharm_order_pharm_component__WEBPACK_IMPORTED_MODULE_28__["OrderPharmComponent"] },
            { path: 'search/:name', component: _website_search_search_component__WEBPACK_IMPORTED_MODULE_31__["SearchComponent"] },
            { path: 'comparison', component: _website_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_32__["ComparisonComponent"] }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'online-pharmacy';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "./src/app/admin/admin-login/admin-login.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_admin_pharms_admin_pharms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-pharms/admin-pharms.component */ "./src/app/admin/admin-pharms/admin-pharms.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _website_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./website/navbar/navbar.component */ "./src/app/website/navbar/navbar.component.ts");
/* harmony import */ var _website_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./website/home/home.component */ "./src/app/website/home/home.component.ts");
/* harmony import */ var _admin_admin_add_pharm_admin_add_pharm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin-add-pharm/admin-add-pharm.component */ "./src/app/admin/admin-add-pharm/admin-add-pharm.component.ts");
/* harmony import */ var _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/admin-category/admin-category.component */ "./src/app/admin/admin-category/admin-category.component.ts");
/* harmony import */ var _admin_admin_moderators_admin_moderators_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin-moderators/admin-moderators.component */ "./src/app/admin/admin-moderators/admin-moderators.component.ts");
/* harmony import */ var _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin-users/admin-users.component */ "./src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_admin_orders_success_admin_orders_success_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin-orders-success/admin-orders-success.component */ "./src/app/admin/admin-orders-success/admin-orders-success.component.ts");
/* harmony import */ var _admin_orders_doing_orders_doing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/orders-doing/orders-doing.component */ "./src/app/admin/orders-doing/orders-doing.component.ts");
/* harmony import */ var _website_home_best_offer_best_offer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./website/home/best-offer/best-offer.component */ "./src/app/website/home/best-offer/best-offer.component.ts");
/* harmony import */ var _website_home_with_sale_with_sale_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./website/home/with-sale/with-sale.component */ "./src/app/website/home/with-sale/with-sale.component.ts");
/* harmony import */ var _website_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./website/footer/footer.component */ "./src/app/website/footer/footer.component.ts");
/* harmony import */ var _website_home_import_pharm_import_pharm_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./website/home/import-pharm/import-pharm.component */ "./src/app/website/home/import-pharm/import-pharm.component.ts");
/* harmony import */ var _website_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./website/about-me/about-me.component */ "./src/app/website/about-me/about-me.component.ts");
/* harmony import */ var _website_pharm_service_pharm_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./website/pharm-service/pharm-service.component */ "./src/app/website/pharm-service/pharm-service.component.ts");
/* harmony import */ var _website_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./website/question-answer/question-answer.component */ "./src/app/website/question-answer/question-answer.component.ts");
/* harmony import */ var _website_order_site_order_site_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./website/order-site/order-site.component */ "./src/app/website/order-site/order-site.component.ts");
/* harmony import */ var _website_users_my_profil_my_profil_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./website/users/my-profil/my-profil.component */ "./src/app/website/users/my-profil/my-profil.component.ts");
/* harmony import */ var _website_users_my_addres_my_addres_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./website/users/my-addres/my-addres.component */ "./src/app/website/users/my-addres/my-addres.component.ts");
/* harmony import */ var _website_users_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./website/users/my-information/my-information.component */ "./src/app/website/users/my-information/my-information.component.ts");
/* harmony import */ var _website_users_my_pharms_my_pharms_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./website/users/my-pharms/my-pharms.component */ "./src/app/website/users/my-pharms/my-pharms.component.ts");
/* harmony import */ var _website_users_my_should_my_should_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./website/users/my-should/my-should.component */ "./src/app/website/users/my-should/my-should.component.ts");
/* harmony import */ var _website_users_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./website/users/my-orders/my-orders.component */ "./src/app/website/users/my-orders/my-orders.component.ts");
/* harmony import */ var _website_pharms_pharms_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./website/pharms/pharms.component */ "./src/app/website/pharms/pharms.component.ts");
/* harmony import */ var _website_about_pharms_about_pharms_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./website/about-pharms/about-pharms.component */ "./src/app/website/about-pharms/about-pharms.component.ts");
/* harmony import */ var _website_basket_basket_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./website/basket/basket.component */ "./src/app/website/basket/basket.component.ts");
/* harmony import */ var _website_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./website/delivery/delivery.component */ "./src/app/website/delivery/delivery.component.ts");
/* harmony import */ var _website_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./website/warranty/warranty.component */ "./src/app/website/warranty/warranty.component.ts");
/* harmony import */ var _website_language_language_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./website/language/language.component */ "./src/app/website/language/language.component.ts");
/* harmony import */ var _website_order_pharm_order_pharm_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./website/order-pharm/order-pharm.component */ "./src/app/website/order-pharm/order-pharm.component.ts");
/* harmony import */ var _website_search_search_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./website/search/search.component */ "./src/app/website/search/search.component.ts");
/* harmony import */ var _website_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./website/comparison/comparison.component */ "./src/app/website/comparison/comparison.component.ts");












// import { MatTableDataSource}  from '@angular/material/table'






































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](httpClient);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
            _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_15__["AdminLoginComponent"],
            _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_16__["AdminHomeComponent"],
            _admin_admin_pharms_admin_pharms_component__WEBPACK_IMPORTED_MODULE_17__["AdminPharmsComponent"],
            _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_18__["AdminOrdersComponent"],
            _website_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
            _website_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _admin_admin_add_pharm_admin_add_pharm_component__WEBPACK_IMPORTED_MODULE_21__["AdminAddPharmComponent"],
            _admin_admin_category_admin_category_component__WEBPACK_IMPORTED_MODULE_22__["AdminCategoryComponent"],
            _admin_admin_moderators_admin_moderators_component__WEBPACK_IMPORTED_MODULE_23__["AdminModeratorsComponent"],
            _admin_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_24__["AdminUsersComponent"],
            _admin_admin_orders_success_admin_orders_success_component__WEBPACK_IMPORTED_MODULE_25__["AdminOrdersSuccessComponent"],
            _admin_orders_doing_orders_doing_component__WEBPACK_IMPORTED_MODULE_26__["OrdersDoingComponent"],
            _website_home_best_offer_best_offer_component__WEBPACK_IMPORTED_MODULE_27__["BestOfferComponent"],
            _website_home_with_sale_with_sale_component__WEBPACK_IMPORTED_MODULE_28__["WithSaleComponent"],
            _website_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
            _website_home_import_pharm_import_pharm_component__WEBPACK_IMPORTED_MODULE_30__["ImportPharmComponent"],
            _website_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_31__["AboutMeComponent"],
            _website_pharm_service_pharm_service_component__WEBPACK_IMPORTED_MODULE_32__["PharmServiceComponent"],
            _website_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_33__["QuestionAnswerComponent"],
            _website_order_site_order_site_component__WEBPACK_IMPORTED_MODULE_34__["OrderSiteComponent"],
            _website_users_my_profil_my_profil_component__WEBPACK_IMPORTED_MODULE_35__["MyProfilComponent"],
            _website_users_my_addres_my_addres_component__WEBPACK_IMPORTED_MODULE_36__["MyAddresComponent"],
            _website_users_my_information_my_information_component__WEBPACK_IMPORTED_MODULE_37__["MyInformationComponent"],
            _website_users_my_pharms_my_pharms_component__WEBPACK_IMPORTED_MODULE_38__["MyPharmsComponent"],
            _website_users_my_should_my_should_component__WEBPACK_IMPORTED_MODULE_39__["MyShouldComponent"],
            _website_users_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_40__["MyOrdersComponent"],
            _website_pharms_pharms_component__WEBPACK_IMPORTED_MODULE_41__["PharmsComponent"],
            _website_about_pharms_about_pharms_component__WEBPACK_IMPORTED_MODULE_42__["AboutPharmsComponent"],
            _website_basket_basket_component__WEBPACK_IMPORTED_MODULE_43__["BasketComponent"],
            _website_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_44__["DeliveryComponent"],
            _website_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_45__["WarrantyComponent"],
            _website_language_language_component__WEBPACK_IMPORTED_MODULE_46__["LanguageComponent"],
            _website_order_pharm_order_pharm_component__WEBPACK_IMPORTED_MODULE_47__["OrderPharmComponent"],
            _website_search_search_component__WEBPACK_IMPORTED_MODULE_48__["SearchComponent"],
            _website_comparison_comparison_component__WEBPACK_IMPORTED_MODULE_49__["ComparisonComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    playSound() {
        let audio = new Audio();
        audio.src = "./assets/audio/alarm.mp3";
        audio.load();
        audio.play().catch((reason => {
            console.log(reason);
        }));
    }
};
AppService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], AppService);



/***/ }),

/***/ "./src/app/shared/services/auth-service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth-service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000"
        // url = "https://online-pharmacy1.herokuapp.com"
        this.url = "";
    }
    postLogin(body) {
        return this.http.post(this.url + '/api/users/sign', body);
    }
    get() {
        return this.http.get(this.url + '/api/users/verifyUser/' + localStorage.getItem('token'));
    }
    getPerson() {
        return this.http.get(this.url + '/api/person/verifyPerson/' + localStorage.getItem('token'));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/basket-service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/basket-service.ts ***!
  \***************************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let BasketService = class BasketService {
    constructor(http) {
        this.http = http;
        this.obj = {
            id: String,
            price: Number
        };
        this.i = 0;
        this.object = [];
        this.data = 0;
    }
};
BasketService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
BasketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], BasketService);



/***/ }),

/***/ "./src/app/shared/services/category.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/services/category.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000/api/categories"; 
        this.url = "/api/categories";
    }
    // url = "https://online-pharmacy1.herokuapp.com/api/categories"
    get() {
        return this.http.get(this.url + '/get');
    }
    post(body) {
        return this.http.post(this.url + '/post/' + localStorage.getItem('token'), body);
    }
    delete(id) {
        return this.http.delete(this.url + '/delete/' + id + '/' + localStorage.getItem('token'));
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], CategoryService);



/***/ }),

/***/ "./src/app/shared/services/comparison-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/comparison-service.ts ***!
  \*******************************************************/
/*! exports provided: ComparisonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonService", function() { return ComparisonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let ComparisonService = class ComparisonService {
    constructor(http) {
        this.http = http;
        this.object = [];
        this.id = 0;
    }
};
ComparisonService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ComparisonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], ComparisonService);



/***/ }),

/***/ "./src/app/shared/services/moderators.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/moderators.ts ***!
  \***********************************************/
/*! exports provided: ModeratorsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorsServices", function() { return ModeratorsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let ModeratorsServices = class ModeratorsServices {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000/api/users"
        this.url = "/api/users";
    }
    // url = "https://online-pharmacy1.herokuapp.com/api/users"
    get() {
        return this.http.get(this.url + '/getModerators');
    }
    post(body) {
        return this.http.post(this.url + '/post', body);
    }
    delete(id) {
        return this.http.delete(this.url + '/delete/' + id + '/' + localStorage.getItem('token'));
    }
};
ModeratorsServices.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ModeratorsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], ModeratorsServices);



/***/ }),

/***/ "./src/app/shared/services/order-pharm.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/order-pharm.ts ***!
  \************************************************/
/*! exports provided: OrderPharmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPharmService", function() { return OrderPharmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let OrderPharmService = class OrderPharmService {
    constructor(http) {
        this.http = http;
        this.id = [];
        this.rate = [];
        this.num = []; //  zakazni ID lari //
        this.ana = [];
        this.testrate = [];
        this.mas = [];
    }
};
OrderPharmService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
OrderPharmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], OrderPharmService);



/***/ }),

/***/ "./src/app/shared/services/orders.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/services/orders.ts ***!
  \*******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000"
        this.url = "";
    }
    // url = "https://online-pharmacy1.herokuapp.com"
    get() {
        return this.http.get(this.url + '/api/orders/getall');
    }
    getsuccess() {
        return this.http.get(this.url + '/api/orders/getsucces');
    }
    getdoing() {
        return this.http.get(this.url + '/api/orders/getdoing');
    }
    post(body) {
        return this.http.post(this.url + '/api/orders/post/' + localStorage.getItem('token'), body);
    }
    patch(id, body) {
        return this.http.patch(this.url + '/api/orders/update/' + id + '/' + localStorage.getItem('token'), body); // Success
    }
    update(id, body) {
        return this.http.patch(this.url + '/api/orders/patch/' + id + '/' + localStorage.getItem('token'), body); // Doing
    }
    delete(id) {
        return this.http.delete(this.url + '/api/orders/delete/' + id);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], OrdersService);



/***/ }),

/***/ "./src/app/shared/services/person.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/services/person.ts ***!
  \*******************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let PersonService = class PersonService {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000/api/person"; 
        this.url = "/api/person";
    }
    // url = "https://online-pharmacy1.herokuapp.com/api/person"
    get() {
        return this.http.get(this.url + '/get');
    }
    getVerify() {
        return this.http.get(this.url + '/verifyPerson/' + localStorage.getItem('token'));
    }
    post(body) {
        return this.http.post(this.url + '/post', body);
    }
    getPerson() {
        return this.http.get(this.url + '/getPerson/' + localStorage.getItem('token'));
    }
    update(body, id) {
        return this.http.patch(this.url + '/patch/' + id + '/' + localStorage.getItem('token'), body);
    }
    delete(id) {
        return this.http.delete(this.url + '/delete/' + id);
    }
};
PersonService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], PersonService);



/***/ }),

/***/ "./src/app/shared/services/pharms.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/services/pharms.ts ***!
  \*******************************************/
/*! exports provided: PharmsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmsServices", function() { return PharmsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let PharmsServices = class PharmsServices {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:5000/api/pharm"
        this.url = "/api/pharm";
    }
    // url = "https://online-pharmacy1.herokuapp.com/api/pharm"
    get() {
        return this.http.get(this.url + '/getall');
    }
    post(name, price, logo, sort, sort1, sort2, sale, roomy, inform, rate) {
        const Pharm = new FormData();
        Pharm.append("name", name);
        Pharm.append("image", logo);
        Pharm.append("price", price);
        Pharm.append("sort[0]", sort);
        Pharm.append("sort[1]", sort1);
        Pharm.append("sort[2]", sort2);
        Pharm.append("sale", sale);
        Pharm.append("roomy", roomy);
        Pharm.append("inform", inform);
        Pharm.append("rate", rate);
        return this.http
            .post(this.url + '/post/' + localStorage.getItem('token'), Pharm)
            .subscribe(response => {
            console.log("Success");
        });
    }
    getPharm(id) {
        return this.http.get(this.url + '/getpharm/' + id);
    }
    getPharm5() {
        return this.http.get(this.url + '/get5');
    }
    getsale() {
        return this.http.get(this.url + '/getsale');
    }
    getsearch(body) {
        return this.http.post(this.url + '/search', body);
    }
    patchRate(id, body) {
        console.log("Service:  ");
        console.log(body);
        return this.http.patch(this.url + '/updaterate/' + id, body);
    }
    patchPharm(id, name, price, logo, sort, sort1, sort2, sale, roomy, inform, rate) {
        const Pharm = new FormData();
        Pharm.append("name", name);
        Pharm.append("image", logo);
        Pharm.append("price", price);
        Pharm.append("sort[0]", sort);
        Pharm.append("sort[1]", sort1);
        Pharm.append("sort[2]", sort2);
        Pharm.append("sale", sale);
        Pharm.append("roomy", roomy);
        Pharm.append("inform", inform);
        Pharm.append("rate", rate);
        return this.http.patch(this.url + '/updatepharm/' + id + '/' + localStorage.getItem('token'), Pharm);
    }
    delete(id) {
        return this.http.delete(this.url + '/deletepharm/' + id + '/' + localStorage.getItem('token'));
    }
};
PharmsServices.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
PharmsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], PharmsServices);



/***/ }),

/***/ "./src/app/shared/services/search-service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search-service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let SearchService = class SearchService {
    constructor(http) {
        this.http = http;
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], SearchService);



/***/ }),

/***/ "./src/app/website/about-me/about-me.component.css":
/*!*********************************************************!*\
  !*** ./src/app/website/about-me/about-me.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/about-me/about-me.component.ts":
/*!********************************************************!*\
  !*** ./src/app/website/about-me/about-me.component.ts ***!
  \********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutMeComponent = class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: __webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/about-me/about-me.component.html"),
        styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/website/about-me/about-me.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutMeComponent);



/***/ }),

/***/ "./src/app/website/about-pharms/about-pharms.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/about-pharms/about-pharms.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvYWJvdXQtcGhhcm1zL2Fib3V0LXBoYXJtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/about-pharms/about-pharms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/about-pharms/about-pharms.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutPharmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPharmsComponent", function() { return AboutPharmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");





let AboutPharmsComponent = class AboutPharmsComponent {
    constructor(pharmService, basketService, route, router) {
        this.pharmService = pharmService;
        this.basketService = basketService;
        this.route = route;
        this.router = router;
        this.uz = false;
        this.ru = true;
        this.en = false;
        this.i = 0;
        this.q = 1;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.id = paramMap.get("id");
                this.pharmService.getPharm(this.id).subscribe(postData => {
                    this.pharm = postData.json();
                });
            }
            else {
                this.id = null;
            }
        });
    }
    add() {
        this.q++;
    }
    min() {
        this.q--;
    }
    uzb() {
        this.uz = true;
        this.ru = false;
        this.en = false;
    }
    rus() {
        this.uz = false;
        this.ru = true;
        this.en = false;
    }
    eng() {
        this.uz = false;
        this.ru = false;
        this.en = true;
    }
    abasket(id) {
        this.i = this.basketService.i;
        this.basketService.object[this.i] = id;
        this.router.navigate(['basket']);
    }
};
AboutPharmsComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutPharmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-pharms',
        template: __webpack_require__(/*! raw-loader!./about-pharms.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/about-pharms/about-pharms.component.html"),
        styles: [__webpack_require__(/*! ./about-pharms.component.css */ "./src/app/website/about-pharms/about-pharms.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AboutPharmsComponent);



/***/ }),

/***/ "./src/app/website/basket/basket.component.css":
/*!*****************************************************!*\
  !*** ./src/app/website/basket/basket.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-product-about{\n    box-shadow: 0 0 30px rgba(0,0,0,.08);\n    font-size: 18px;\n    margin-top: 15px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .card-product-border{\n    border-bottom: 1px solid #EFECEC;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoic3JjL2FwcC93ZWJzaXRlL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXByb2R1Y3QtYWJvdXR7XG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLDAsMCwuMDgpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmNhcmQtcHJvZHVjdC1ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVDRUM7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/website/basket/basket.component.ts":
/*!****************************************************!*\
  !*** ./src/app/website/basket/basket.component.ts ***!
  \****************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/order-pharm */ "./src/app/shared/services/order-pharm.ts");





let BasketComponent = class BasketComponent {
    constructor(basketService, pharmService, orderService) {
        this.basketService = basketService;
        this.pharmService = pharmService;
        this.orderService = orderService;
        this.a = 0;
        this.pharms = [];
        this.number = [];
        this.dis = false;
        this.q = 1;
        this.ordersnum = [];
        this.orderssum = [];
        this.i = 0;
        this.j = 0;
        this.values = [1];
        this.soni = [];
        this.getbasket();
        this.getpharm();
    }
    getbasket() {
        this.id = this.basketService.obj.id;
        this.price = this.basketService.obj.price;
    }
    getpharm() {
        this.number = this.basketService.object;
        for (let i = 0; i < this.number.length; i++) {
            this.soni[i] = [];
        }
        for (let i = 0; i <= this.number.length - 1; i++) {
            this.pharmService.getPharm(this.number[i]).subscribe(res => {
                this.pharms[i] = res.json();
                for (let j = 0; j <= this.pharms[i].rate; j++) {
                    this.soni[i][j] = j;
                }
            });
        }
    }
    add(a, b, c) {
        console.log(a);
        this.d = a * b;
        this.ordersnum[this.j] = this.d;
        this.orderService.testrate[this.i] = a;
        this.orderService.num[this.i] = c;
        // this.orderService.num[this.i + 1] = a;
        // this.i = this.i + 2;
        this.i++;
        this.j++;
        //  console.log("ordersnum");
        //  console.log(this.ordersnum);
        this.dis = true;
        // Swal.fire({
        //   position: 'top-end',
        //   type: 'success',
        //   title: 'Your work has been saved',
        //   showConfirmButton: false,
        //   timer: 1000
        // })
    }
    myfunk() {
        function getSum(total, num) {
            return total + num;
        }
        this.w = this.ordersnum.reduce(getSum);
        console.log(this.ordersnum.reduce(getSum));
        //  for (let i=0; i<=this.ordersnum.length-1; i++) {
        //       this.w += this.ordersnum[i];
        //       console.log(this.ordersnum[i])
        //  }
        console.log("SUMMA : ");
        console.log(this.w);
        this.orderService.id = this.pharms;
        this.orderService.sum = this.w;
        this.orderService.ana = this.ordersnum;
        // this.orderService.rate = this.ordersnum;
        console.log("Summa 2 :");
        console.log(this.orderService.sum);
    }
    min() {
        this.q--;
    }
    plus() {
        this.q++;
    }
    ngOnInit() {
    }
};
BasketComponent.ctorParameters = () => [
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"] },
    { type: src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_4__["OrderPharmService"] }
];
BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basket',
        template: __webpack_require__(/*! raw-loader!./basket.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/basket/basket.component.html"),
        styles: [__webpack_require__(/*! ./basket.component.css */ "./src/app/website/basket/basket.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"],
        src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_4__["OrderPharmService"]])
], BasketComponent);



/***/ }),

/***/ "./src/app/website/comparison/comparison.component.css":
/*!*************************************************************!*\
  !*** ./src/app/website/comparison/comparison.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvY29tcGFyaXNvbi9jb21wYXJpc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/comparison/comparison.component.ts":
/*!************************************************************!*\
  !*** ./src/app/website/comparison/comparison.component.ts ***!
  \************************************************************/
/*! exports provided: ComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonComponent", function() { return ComparisonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/comparison-service */ "./src/app/shared/services/comparison-service.ts");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");




let ComparisonComponent = class ComparisonComponent {
    constructor(comparisonService, pharmService) {
        this.comparisonService = comparisonService;
        this.pharmService = pharmService;
        this.uz = false;
        this.ru = true;
        this.en = false;
        this.id = [];
        this.pharms = [];
        this.get();
    }
    get() {
        for (let i = 0; i < 2; i++) {
            this.pharmService.getPharm(this.comparisonService.object[i]).subscribe(res => {
                this.pharms.push(res.json());
            });
        }
        console.log(this.pharms);
    }
    uzb() {
        this.uz = true;
        this.ru = false;
        this.en = false;
    }
    rus() {
        this.uz = false;
        this.ru = true;
        this.en = false;
    }
    eng() {
        this.uz = false;
        this.ru = false;
        this.en = true;
    }
    ngOnInit() {
    }
};
ComparisonComponent.ctorParameters = () => [
    { type: src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_2__["ComparisonService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"] }
];
ComparisonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comparison',
        template: __webpack_require__(/*! raw-loader!./comparison.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/comparison/comparison.component.html"),
        styles: [__webpack_require__(/*! ./comparison.component.css */ "./src/app/website/comparison/comparison.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_2__["ComparisonService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"]])
], ComparisonComponent);



/***/ }),

/***/ "./src/app/website/delivery/delivery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/website/delivery/delivery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/delivery/delivery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/website/delivery/delivery.component.ts ***!
  \********************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryComponent = class DeliveryComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/delivery/delivery.component.html"),
        styles: [__webpack_require__(/*! ./delivery.component.css */ "./src/app/website/delivery/delivery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeliveryComponent);



/***/ }),

/***/ "./src/app/website/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/website/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/website/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/website/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/website/home/best-offer/best-offer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/website/home/best-offer/best-offer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS9iZXN0LW9mZmVyL2Jlc3Qtb2ZmZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/home/best-offer/best-offer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/website/home/best-offer/best-offer.component.ts ***!
  \*****************************************************************/
/*! exports provided: BestOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestOfferComponent", function() { return BestOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/comparison-service */ "./src/app/shared/services/comparison-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let BestOfferComponent = class BestOfferComponent {
    constructor(pharmService, basketService, comparisonService, route) {
        this.pharmService = pharmService;
        this.basketService = basketService;
        this.comparisonService = comparisonService;
        this.route = route;
        this.pharms = [];
        this.i = 0;
        this.rate = false;
        this.get();
    }
    get() {
        this.pharmService.get().subscribe(res => {
            this.pharms = res.json();
            console.log(this.pharms);
        });
    }
    addBasket(number) {
        this.i = this.basketService.i;
        this.basketService.object[this.i] = number;
        console.log(this.basketService.object[this.i]);
        this.basketService.i++;
        // this.i++;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'success',
            title: 'Maxsulot savatga qo\'shildi',
            showConfirmButton: false,
            timer: 1000
        });
    }
    comparison(id) {
        this.comparisonService.object[this.comparisonService.id] = id;
        console.log(this.comparisonService.object);
        this.comparisonService.id++;
        if (this.comparisonService.object.length == 2) {
            this.route.navigate(['/comparison']);
            this.comparisonService.id = 0;
        }
    }
    ngOnInit() {
    }
};
BestOfferComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_5__["ComparisonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
BestOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-best-offer',
        template: __webpack_require__(/*! raw-loader!./best-offer.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/home/best-offer/best-offer.component.html"),
        styles: [__webpack_require__(/*! ./best-offer.component.css */ "./src/app/website/home/best-offer/best-offer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"],
        src_app_shared_services_comparison_service__WEBPACK_IMPORTED_MODULE_5__["ComparisonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], BestOfferComponent);



/***/ }),

/***/ "./src/app/website/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/website/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/website/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let HomeComponent = class HomeComponent {
    constructor(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'ru', 'uz']);
        translate.setDefaultLang('ru');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
        translate.getLangs();
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/website/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/website/home/import-pharm/import-pharm.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/website/home/import-pharm/import-pharm.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS9pbXBvcnQtcGhhcm0vaW1wb3J0LXBoYXJtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/home/import-pharm/import-pharm.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/website/home/import-pharm/import-pharm.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImportPharmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPharmComponent", function() { return ImportPharmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImportPharmComponent = class ImportPharmComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImportPharmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import-pharm',
        template: __webpack_require__(/*! raw-loader!./import-pharm.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/home/import-pharm/import-pharm.component.html"),
        styles: [__webpack_require__(/*! ./import-pharm.component.css */ "./src/app/website/home/import-pharm/import-pharm.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ImportPharmComponent);



/***/ }),

/***/ "./src/app/website/home/with-sale/with-sale.component.css":
/*!****************************************************************!*\
  !*** ./src/app/website/home/with-sale/with-sale.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvaG9tZS93aXRoLXNhbGUvd2l0aC1zYWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/home/with-sale/with-sale.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/website/home/with-sale/with-sale.component.ts ***!
  \***************************************************************/
/*! exports provided: WithSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithSaleComponent", function() { return WithSaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let WithSaleComponent = class WithSaleComponent {
    constructor(pharmService, basketService) {
        this.pharmService = pharmService;
        this.basketService = basketService;
        this.pharms = [];
        this.i = 0;
        // this.get();
    }
    get() {
        this.pharmService.getsale().subscribe(res => {
            this.pharms = res.json();
        });
    }
    ngOnInit() {
    }
    addBasket(number) {
        this.i = this.basketService.i;
        // console.log(number);
        this.basketService.object[this.i] = number;
        console.log(this.basketService.object[this.i]);
        this.basketService.i++;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'success',
            title: 'Maxsulot savatga qo\'shildi',
            showConfirmButton: false,
            timer: 1000
        });
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: 'top-end',
        //   showConfirmButton: false,
        //   timer: 1400
        // });
        // Toast.fire({
        //   type: 'success',
        //   title: name + '  Korzinkaga qo\'shildi'
        // })
    }
};
WithSaleComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] }
];
WithSaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-with-sale',
        template: __webpack_require__(/*! raw-loader!./with-sale.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/home/with-sale/with-sale.component.html"),
        styles: [__webpack_require__(/*! ./with-sale.component.css */ "./src/app/website/home/with-sale/with-sale.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"]])
], WithSaleComponent);



/***/ }),

/***/ "./src/app/website/language/language.component.css":
/*!*********************************************************!*\
  !*** ./src/app/website/language/language.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/language/language.component.ts":
/*!********************************************************!*\
  !*** ./src/app/website/language/language.component.ts ***!
  \********************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let LanguageComponent = class LanguageComponent {
    constructor(translate) {
        this.translate = translate;
        this.langs = ['RUS', 'UZB', 'ENG', 'УЗБ'];
        translate.addLangs(['en', 'ru', 'uz']);
        translate.setDefaultLang('RUS');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
        translate.getLangs();
    }
    ngOnInit() {
    }
};
LanguageComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: __webpack_require__(/*! raw-loader!./language.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/language/language.component.html"),
        styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/website/language/language.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], LanguageComponent);



/***/ }),

/***/ "./src/app/website/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/website/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/website/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/person */ "./src/app/shared/services/person.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/search-service */ "./src/app/shared/services/search-service.ts");








let NavbarComponent = class NavbarComponent {
    constructor(pharmService, personService, router, basketservice, searchService) {
        this.pharmService = pharmService;
        this.personService = personService;
        this.router = router;
        this.basketservice = basketservice;
        this.searchService = searchService;
        this.a = 1;
        this.data = false;
        this.q = 0;
        this.a = basketservice.i;
    }
    ngOnInit() {
        this.verify();
    }
    search(body) {
        this.pharmService.getsearch({ "name": body }).subscribe(result => {
            this.pharms = result.json();
            this.searchService.object = this.pharms;
            // console.log(this.searchService.object);
        });
        this.router.navigate(['/search/' + body]);
    }
    verify() {
        this.personService.getVerify().subscribe(res => {
            var obj = res.json();
            console.log(obj);
            if (obj.isUser) {
                this.data = true;
            }
        });
    }
    addUser(number, kod) {
        this.personService.post({ number: number, kod: kod }).subscribe(res => {
            var obj = res.json();
            localStorage.setItem('token', obj.token);
            this.data = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Siz tizmga kirdingiz!',
            });
            window.location.reload();
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"] },
    { type: src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__["PersonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_5__["BasketService"] },
    { type: src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/website/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"],
        src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_5__["BasketService"],
        src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/website/order-pharm/order-pharm.component.css":
/*!***************************************************************!*\
  !*** ./src/app/website/order-pharm/order-pharm.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvb3JkZXItcGhhcm0vb3JkZXItcGhhcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/order-pharm/order-pharm.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/website/order-pharm/order-pharm.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderPharmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPharmComponent", function() { return OrderPharmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order-pharm */ "./src/app/shared/services/order-pharm.ts");
/* harmony import */ var src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/person */ "./src/app/shared/services/person.ts");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/orders */ "./src/app/shared/services/orders.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);






// import { routerNgProbeToken } from '@angular/router/src/router_module';


let OrderPharmComponent = class OrderPharmComponent {
    constructor(orderService, personService, pharmService, myService, router) {
        this.orderService = orderService;
        this.personService = personService;
        this.pharmService = pharmService;
        this.myService = myService;
        this.router = router;
        this.button = false;
        this.activ = false;
        this.paycom = false;
        this.bol = false;
        this.data = false;
        this.icon = false;
        this.icon1 = false;
        this.pharms = [];
        this.rate = [];
        this.id = [];
        this.ana = [];
        this.person = [];
        this.j = 0;
        this.testrate = [];
        this.get();
        this.getpharm();
        this.sum = orderService.sum;
        this.id = orderService.num;
        this.ana = orderService.ana;
        this.testrate = orderService.testrate;
        console.log("this.id");
        console.log(this.testrate);
    }
    ngOnInit() {
        this.verify();
    }
    getpharm() {
        //   for ( let i = 0  ; i<=this.orderService.num.length -1; i=i+2) {
        //   this.pharmService.getPharm(this.orderService.num[i]).subscribe( res =>{
        //       this.pharms[this.j] = res.json();
        //       this.rate[this.j] = this.orderService.num[i+1];
        //       this.j++;
        //   })
        // }
        for (let i = 0; i <= this.orderService.num.length - 1; i++) {
            this.pharmService.getPharm(this.orderService.num[i]).subscribe(res => {
                this.pharms[i] = res.json();
                this.rate[i] = this.orderService.testrate[i];
            });
        }
        console.log("SS");
        console.log(this.pharms);
        console.log(this.rate);
    }
    verifynumber() {
        this.activ = true;
    }
    verify() {
        this.personService.getVerify().subscribe(res => {
            var obj = res.json();
            // console.log(obj)
            if (obj.isUser) {
                this.data = true;
            }
        });
    }
    get() {
        this.personService.getPerson().subscribe(res => {
            this.person = res.json();
            //  this.id = this.person[0]._id;  
            console.log("PERSON" + this.person);
        });
    }
    bool() {
        this.bol = true;
        this.manzil = "Xaridorni o'zi kelib olishi";
    }
    bool1() {
        this.bol = false;
        this.manzil = "Uy yoki office ga eltish";
    }
    pay() {
        this.paycom = true;
        this.icon = false;
        this.icon1 = false;
        this.tolov = "Online to'lov orqali";
    }
    pay1() {
        this.paycom = false;
        this.icon = true;
        this.icon1 = false;
        this.tolov = "Terminal orqali to'lov";
    }
    pay2() {
        this.paycom = false;
        this.icon1 = true;
        this.icon = false;
        this.tolov = "Naqd";
    }
    click() {
        this.system = "Click orqali";
    }
    payme() {
        this.system = "PayCom orqali";
    }
    order(name, number) {
        if (!number) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Iltimos Telefon raqamingizni tasdiqlang',
            });
        }
        else if (!this.manzil) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Iltimos yetkazib berish turini tanlang',
            });
        }
        else if (this.manzil == "Uy yoki office ga eltish" && !this.address) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Iltimos Manzilingizni kiriting va "Tasdiqlash" tugmasini bosing',
            });
        }
        else if (!this.tolov) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Iltimos to\'lov turini tanlang',
            });
        }
        else {
            this.myService.post({
                how: this.orderService.testrate,
                pharms: this.orderService.num,
                forward: this.manzil,
                payType: this.tolov,
                telnumber: number,
                maker: name,
                address: this.address,
                rate: this.sum
            })
                .subscribe((res) => {
                if (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: 'success',
                        title: 'Done',
                        text: 'Buyurtma qabul qilindi!',
                    });
                    for (let i = 0; i <= this.rate.length - 1; i++) {
                        let id = this.pharms[i]._id;
                        console.log();
                        let rate = this.rate[i];
                        var body = {
                            "rate": this.rate[i]
                        };
                        this.pharmService.patchRate(id, body).subscribe(res => {
                            if (res) {
                                console.log("Done");
                            }
                            else {
                                console.log("ERR");
                            }
                        });
                    }
                    console.log("AAA");
                    console.log(this.pharms);
                    this.router.navigate(['/']);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                }
            });
        }
    }
    registUser(number, kod) {
        this.personService.post({ number: number, kod: kod }).subscribe(res => {
            var obj = res.json();
            localStorage.setItem('token', obj.token);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                position: 'top-end',
                type: 'success',
                title: 'Sizning telefon raqamingiz muvaffaqiytali tasdiqlandi',
                showConfirmButton: false,
                timer: 1000
            });
        });
    }
    select(fod, street, home, number) {
        this.address = fod + " " + street + " " + home + " " + number;
        if (fod && street && home && number) {
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000
            });
            Toast.fire({
                type: 'success',
                title: 'Manzil tasdilandi'
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Iltimos manzilni to\'liq kiriting',
            });
        }
    }
};
OrderPharmComponent.ctorParameters = () => [
    { type: src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_2__["OrderPharmService"] },
    { type: src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__["PersonService"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"] },
    { type: src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
OrderPharmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-pharm',
        template: __webpack_require__(/*! raw-loader!./order-pharm.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/order-pharm/order-pharm.component.html"),
        styles: [__webpack_require__(/*! ./order-pharm.component.css */ "./src/app/website/order-pharm/order-pharm.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_order_pharm__WEBPACK_IMPORTED_MODULE_2__["OrderPharmService"],
        src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_4__["PharmsServices"],
        src_app_shared_services_orders__WEBPACK_IMPORTED_MODULE_5__["OrdersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], OrderPharmComponent);



/***/ }),

/***/ "./src/app/website/order-site/order-site.component.css":
/*!*************************************************************!*\
  !*** ./src/app/website/order-site/order-site.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvb3JkZXItc2l0ZS9vcmRlci1zaXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/order-site/order-site.component.ts":
/*!************************************************************!*\
  !*** ./src/app/website/order-site/order-site.component.ts ***!
  \************************************************************/
/*! exports provided: OrderSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSiteComponent", function() { return OrderSiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderSiteComponent = class OrderSiteComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderSiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-site',
        template: __webpack_require__(/*! raw-loader!./order-site.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/order-site/order-site.component.html"),
        styles: [__webpack_require__(/*! ./order-site.component.css */ "./src/app/website/order-site/order-site.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OrderSiteComponent);



/***/ }),

/***/ "./src/app/website/pharm-service/pharm-service.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/website/pharm-service/pharm-service.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvcGhhcm0tc2VydmljZS9waGFybS1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/website/pharm-service/pharm-service.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/website/pharm-service/pharm-service.component.ts ***!
  \******************************************************************/
/*! exports provided: PharmServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmServiceComponent", function() { return PharmServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PharmServiceComponent = class PharmServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
PharmServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pharm-service',
        template: __webpack_require__(/*! raw-loader!./pharm-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/pharm-service/pharm-service.component.html"),
        styles: [__webpack_require__(/*! ./pharm-service.component.css */ "./src/app/website/pharm-service/pharm-service.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PharmServiceComponent);



/***/ }),

/***/ "./src/app/website/pharms/pharms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/website/pharms/pharms.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvcGhhcm1zL3BoYXJtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/pharms/pharms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/website/pharms/pharms.component.ts ***!
  \****************************************************/
/*! exports provided: PharmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmsComponent", function() { return PharmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let PharmsComponent = class PharmsComponent {
    constructor(pharmService, basketService) {
        this.pharmService = pharmService;
        this.basketService = basketService;
        this.pharms = [];
        this.i = 0;
        this.get();
    }
    get() {
        this.pharmService.get().subscribe(res => {
            this.pharms = res.json();
        });
    }
    addBasket(number) {
        this.i = this.basketService.i;
        this.basketService.object[this.i] = number;
        console.log(this.basketService.object[this.i]);
        this.basketService.i++;
        this.b = this.basketService.i;
        localStorage.setItem('id', this.b);
        // this.i++;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            type: 'success',
            title: 'Maxsulot savatga qo\'shildi',
            showConfirmButton: false,
            timer: 1000
        });
    }
    ngOnInit() {
    }
};
PharmsComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] }
];
PharmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pharms',
        template: __webpack_require__(/*! raw-loader!./pharms.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/pharms/pharms.component.html"),
        styles: [__webpack_require__(/*! ./pharms.component.css */ "./src/app/website/pharms/pharms.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_2__["PharmsServices"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"]])
], PharmsComponent);



/***/ }),

/***/ "./src/app/website/question-answer/question-answer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/website/question-answer/question-answer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvcXVlc3Rpb24tYW5zd2VyL3F1ZXN0aW9uLWFuc3dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/question-answer/question-answer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/website/question-answer/question-answer.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerComponent", function() { return QuestionAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionAnswerComponent = class QuestionAnswerComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuestionAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-answer',
        template: __webpack_require__(/*! raw-loader!./question-answer.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/question-answer/question-answer.component.html"),
        styles: [__webpack_require__(/*! ./question-answer.component.css */ "./src/app/website/question-answer/question-answer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuestionAnswerComponent);



/***/ }),

/***/ "./src/app/website/search/search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/website/search/search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/website/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search-service */ "./src/app/shared/services/search-service.ts");
/* harmony import */ var src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/basket-service */ "./src/app/shared/services/basket-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");






let SearchComponent = class SearchComponent {
    constructor(searchService, basketService, router, route, pharmService) {
        this.searchService = searchService;
        this.basketService = basketService;
        this.router = router;
        this.route = route;
        this.pharmService = pharmService;
        this.uz = false;
        this.ru = true;
        this.en = false;
        this.i = 0;
        this.q = 0;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("name")) {
                this.name = paramMap.get("name");
                this.pharmService.getsearch({ "name": this.name }).subscribe(postData => {
                    this.pharm = postData.json();
                    console.log(this.pharm);
                });
            }
            else {
                this.id = null;
            }
        });
        // console.log(this.searchService.object);
        // this.pharm = this.searchService.object
        // console.log(this.pharm);
    }
    add() {
        this.q++;
    }
    min() {
        this.q--;
    }
    uzb() {
        this.uz = true;
        this.ru = false;
        this.en = false;
    }
    rus() {
        this.uz = false;
        this.ru = true;
        this.en = false;
    }
    eng() {
        this.uz = false;
        this.ru = false;
        this.en = true;
    }
    abasket(id) {
        this.i = this.basketService.i;
        this.basketService.object[this.i] = id;
        this.router.navigate(['basket']);
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] },
    { type: src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_5__["PharmsServices"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/website/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
        src_app_shared_services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_5__["PharmsServices"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/website/users/my-addres/my-addres.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/users/my-addres/my-addres.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktYWRkcmVzL215LWFkZHJlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/users/my-addres/my-addres.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/users/my-addres/my-addres.component.ts ***!
  \****************************************************************/
/*! exports provided: MyAddresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddresComponent", function() { return MyAddresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyAddresComponent = class MyAddresComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyAddresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-addres',
        template: __webpack_require__(/*! raw-loader!./my-addres.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-addres/my-addres.component.html"),
        styles: [__webpack_require__(/*! ./my-addres.component.css */ "./src/app/website/users/my-addres/my-addres.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyAddresComponent);



/***/ }),

/***/ "./src/app/website/users/my-information/my-information.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/website/users/my-information/my-information.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktaW5mb3JtYXRpb24vbXktaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/website/users/my-information/my-information.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/website/users/my-information/my-information.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInformationComponent", function() { return MyInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/person */ "./src/app/shared/services/person.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let MyInformationComponent = class MyInformationComponent {
    constructor(personService) {
        this.personService = personService;
        this.person = [];
        this.get();
    }
    get() {
        this.personService.getPerson().subscribe(res => {
            this.person = res.json();
            this.id = this.person[0]._id;
            console.log(this.person);
        });
    }
    update(name, lastname) {
        this.personService.update({ name: name, lastname: lastname }, this.id).subscribe(res => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                type: 'success',
                title: 'Done',
                text: 'Ma\'lumotlar o\'zgartirildi!',
            });
            window.location.reload();
        });
    }
    ngOnInit() {
    }
};
MyInformationComponent.ctorParameters = () => [
    { type: src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }
];
MyInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-information',
        template: __webpack_require__(/*! raw-loader!./my-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-information/my-information.component.html"),
        styles: [__webpack_require__(/*! ./my-information.component.css */ "./src/app/website/users/my-information/my-information.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_person__WEBPACK_IMPORTED_MODULE_2__["PersonService"]])
], MyInformationComponent);



/***/ }),

/***/ "./src/app/website/users/my-orders/my-orders.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/users/my-orders/my-orders.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/users/my-orders/my-orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/users/my-orders/my-orders.component.ts ***!
  \****************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyOrdersComponent = class MyOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: __webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-orders/my-orders.component.html"),
        styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/website/users/my-orders/my-orders.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyOrdersComponent);



/***/ }),

/***/ "./src/app/website/users/my-pharms/my-pharms.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/users/my-pharms/my-pharms.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktcGhhcm1zL215LXBoYXJtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/users/my-pharms/my-pharms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/users/my-pharms/my-pharms.component.ts ***!
  \****************************************************************/
/*! exports provided: MyPharmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPharmsComponent", function() { return MyPharmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyPharmsComponent = class MyPharmsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyPharmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-pharms',
        template: __webpack_require__(/*! raw-loader!./my-pharms.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-pharms/my-pharms.component.html"),
        styles: [__webpack_require__(/*! ./my-pharms.component.css */ "./src/app/website/users/my-pharms/my-pharms.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyPharmsComponent);



/***/ }),

/***/ "./src/app/website/users/my-profil/my-profil.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/users/my-profil/my-profil.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktcHJvZmlsL215LXByb2ZpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/users/my-profil/my-profil.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/users/my-profil/my-profil.component.ts ***!
  \****************************************************************/
/*! exports provided: MyProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilComponent", function() { return MyProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth-service */ "./src/app/shared/services/auth-service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let MyProfilComponent = class MyProfilComponent {
    constructor(router, authSvc) {
        this.router = router;
        this.authSvc = authSvc;
        this.allow = false;
    }
    ngOnInit() {
        this.authVerify();
    }
    logOut() {
        localStorage.removeItem("token");
        window.location.reload();
        this.router.navigate(['/about']);
    }
    authVerify() {
        this.authSvc.getPerson().subscribe((result) => {
            var object = result.json();
            if (!object.isUser) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    type: 'error',
                    title: 'Done',
                    text: 'Siz tizimdan chiqdingiz',
                });
                this.router.navigate(['/']);
            }
            else {
                this.allow = true;
            }
        }, (err) => {
            this.router.navigate(['/my-profil']);
        });
    }
};
MyProfilComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
MyProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profil',
        template: __webpack_require__(/*! raw-loader!./my-profil.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-profil/my-profil.component.html"),
        styles: [__webpack_require__(/*! ./my-profil.component.css */ "./src/app/website/users/my-profil/my-profil.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], MyProfilComponent);



/***/ }),

/***/ "./src/app/website/users/my-should/my-should.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/website/users/my-should/my-should.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvdXNlcnMvbXktc2hvdWxkL215LXNob3VsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website/users/my-should/my-should.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/website/users/my-should/my-should.component.ts ***!
  \****************************************************************/
/*! exports provided: MyShouldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShouldComponent", function() { return MyShouldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyShouldComponent = class MyShouldComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyShouldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-should',
        template: __webpack_require__(/*! raw-loader!./my-should.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/users/my-should/my-should.component.html"),
        styles: [__webpack_require__(/*! ./my-should.component.css */ "./src/app/website/users/my-should/my-should.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyShouldComponent);



/***/ }),

/***/ "./src/app/website/warranty/warranty.component.css":
/*!*********************************************************!*\
  !*** ./src/app/website/warranty/warranty.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  td, th {\n    width: 25%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vic2l0ZS93YXJyYW50eS93YXJyYW50eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUvd2FycmFudHkvd2FycmFudHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/website/warranty/warranty.component.ts":
/*!********************************************************!*\
  !*** ./src/app/website/warranty/warranty.component.ts ***!
  \********************************************************/
/*! exports provided: WarrantyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyComponent", function() { return WarrantyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pharms */ "./src/app/shared/services/pharms.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let WarrantyComponent = class WarrantyComponent {
    constructor(pharmService) {
        this.pharmService = pharmService;
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        pharmService.get().subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.json());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    ngOnInit() {
    }
};
WarrantyComponent.ctorParameters = () => [
    { type: src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], WarrantyComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], WarrantyComponent.prototype, "sort", void 0);
WarrantyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-warranty',
        template: __webpack_require__(/*! raw-loader!./warranty.component.html */ "./node_modules/raw-loader/index.js!./src/app/website/warranty/warranty.component.html"),
        styles: [__webpack_require__(/*! ./warranty.component.css */ "./src/app/website/warranty/warranty.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_pharms__WEBPACK_IMPORTED_MODULE_3__["PharmsServices"]])
], WarrantyComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Downloads\Telegram Desktop\online-pharmasy\online-pharmasy-latest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
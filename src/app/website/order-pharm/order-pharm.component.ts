import { Component, OnInit } from '@angular/core';
import { OrderPharmService } from 'src/app/shared/services/order-pharm';
import { PersonService } from 'src/app/shared/services/person';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { OrdersService } from 'src/app/shared/services/orders';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-order-pharm',
  templateUrl: './order-pharm.component.html',
  styleUrls: ['./order-pharm.component.css']
})
export class OrderPharmComponent implements OnInit {

  button=false
  activ=false
  paycom = false
  bol=false
  data= false;
  icon=false
  icon1=false
  pharms = [];
  sum: any;
  rate= [];
  id = [];
  ana = [];
  person = []
  j=0;
  number: any;
  manzil :any;
  tolov: any
  system: any;
  address : any;

  testrate = [];

  constructor( 
    public orderService : OrderPharmService,
    public personService: PersonService,
    public pharmService: PharmsServices,
    public myService: OrdersService,
    public router: Router,
    private navbarCom: NavbarComponent
    ) { 
      this.get();
      this.getpharm();
    this.sum =  orderService.sum;
    this.id = orderService.num;
    this.ana = orderService.ana;
      this.testrate = orderService.testrate;

    console.log("this.id");
    console.log(this.testrate);
  }

  ngOnInit() {
    this.verify()
  }

  getpharm() { 
  //   for ( let i = 0  ; i<=this.orderService.num.length -1; i=i+2) {
  //   this.pharmService.getPharm(this.orderService.num[i]).subscribe( res =>{
  //       this.pharms[this.j] = res.json();
  //       this.rate[this.j] = this.orderService.num[i+1];
  //       this.j++;
  //   })
  // }

      for (let i=0; i<=this.orderService.num.length-1; i++) {
        this.pharmService.getPharm(this.orderService.num[i]).subscribe( res =>{
          this.pharms[i] = res.json();
          this.rate[i] = this.orderService.testrate[i];
        })
      }

      console.log("SS");
      console.log(this.pharms);
      console.log(this.rate);


  }


  verifynumber() {
    this.activ = true;
  }

  verify () {
    this.personService.getVerify().subscribe( res =>{
        var obj = res.json();
        // console.log(obj)
        if (obj.isUser) {
              this.data = true;
        }
    })
  }


  get() {
    this.personService.getPerson().subscribe( res =>{
       this.person = res.json(); 
      //  this.id = this.person[0]._id;  
       console.log("PERSON" + this.person)
   })
  }

  bool() {
    this.bol = true
    this.manzil = "Xaridorni o'zi kelib olishi"
  }
  bool1() {
    this.bol = false
    this.manzil = "Uy yoki office ga eltish";
  }

  pay() {
    this.paycom = true
    this.icon=false
    this.icon1=false
    this.tolov = "Online to'lov orqali"
  }

  pay1(){
    this.paycom = false
    this.icon=true
    this.icon1=false
    this.tolov = "Terminal orqali to'lov"
  }
  pay2() {
    this.paycom = false
    this.icon1=true
    this.icon=false
    this.tolov = "Naqd"
  }

  click(){
    this.system = "Click orqali"
  }
  payme() {
    this.system = "PayCom orqali"
  }


  order(name, number) {
    if (!number){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Iltimos Telefon raqamingizni tasdiqlang',
      })
    }
    else if (!this.manzil ){
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Iltimos yetkazib berish turini tanlang',
      })
    }
    else if ( this.manzil == "Uy yoki office ga eltish" && !this.address) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Iltimos Manzilingizni kiriting va "Tasdiqlash" tugmasini bosing',
      })
    }
    else if(!this.tolov) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Iltimos to\'lov turini tanlang',
      })
    }
    else {
      this.navbarCom.updateCount(0);

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
        .subscribe(  (res)=>{
          if(res) {
            Swal.fire({
              type: 'success',
              title: 'Done',
              text: 'Buyurtma qabul qilindi!',
  })

  for(let i=0; i<=this.rate.length-1; i++) {
    let id = this.pharms[i]._id;
    console.log();
    let rate = this.rate[i];
    var body = {
        "rate": this.rate[i]
    }
      this.pharmService.patchRate(id, body).subscribe( res =>{
        if (res) {
          console.log("Done")
        }
        else {
          console.log("ERR");
        }
      })
  }
  console.log("AAA");
    console.log(this.pharms);


  this.router.navigate(['/']);
          }
          else { 
  
           Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        })

    }
   

  }

  registUser(number, kod) {
    this.personService.post({number: number, kod: kod}).subscribe( res =>{
      var obj = res.json();
      localStorage.setItem('token', obj.token);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Sizning telefon raqamingiz muvaffaqiytali tasdiqlandi',
        showConfirmButton: false,
        timer: 1000
      })
    }) 
  }


  select(fod, street, home, number) {
    this.address =  fod + " " +street + " " + home + " " + number;
    if(fod && street && home && number) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
      });
      
      Toast.fire({
        type: 'success',
        title:  'Manzil tasdilandi'
      })
    }
    else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Iltimos manzilni to\'liq kiriting',
})
    }
        
  }





}

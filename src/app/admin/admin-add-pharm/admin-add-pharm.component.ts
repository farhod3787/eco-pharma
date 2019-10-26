import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PharmsServices } from './../../shared/services/pharms'
import { Pharm } from 'src/app/shared/models/pharm';
import { CategoryService } from 'src/app/shared/services/category';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-add-pharm',
  templateUrl: './admin-add-pharm.component.html',
  styleUrls: ['./admin-add-pharm.component.css']
})
export class AdminAddPharmComponent implements OnInit {
  imagePreview: any;
  private mode = 'create'
  private postId: string
  post: Pharm;
  categorys = [];
  roomy: any;
  form: FormGroup;

  constructor(
    private srv: PharmsServices,
    private categoryService: CategoryService,
    public route: ActivatedRoute,
    private router : Router
  ) {
    this.getCategory()

  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      price: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required] }),

      sort: new FormControl(null, { validators: [Validators.required] }),

      sort1: new FormControl(null, { validators: [Validators.required] }),
      sort2: new FormControl(null, { validators: [Validators.required] }),

      sale: new FormControl(null, { validators: [Validators.required] }),
      roomy: new FormControl(null, { validators: [Validators.required] }),
      inform: new FormControl(null, { validators: [Validators.required] }),
      rate: new FormControl(null, { validators: [Validators.required] })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
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
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });


  }


  onInputChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;                   // rasm tanlanganda ko'rsatish
    }
    reader.readAsDataURL(file);
  }

  onSave() {
    if (this.mode == "create") {

      if (this.form.value.sale !== 0) {
        this.form.value.price = this.form.value.price * (1 - this.form.value.sale / 100);
      }
      this.srv.post(
        this.form.value.name,
        this.form.value.price,
        this.form.value.image,

        this.form.value.sort,
        this.form.value.sort1,
        this.form.value.sort2,

        this.form.value.sale,
        this.form.value.roomy,
        this.form.value.inform,
        this.form.value.rate
      )
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Yangi dori qo\'shildi!',
      })
      this.form.reset();
    }
    else {
      this.srv.patchPharm(
        this.postId,
        this.form.value.name,
        this.form.value.price,
        this.form.value.image,
        this.form.value.sort,
        this.form.value.sort1,
        this.form.value.sort2,
        this.form.value.sale,
        this.form.value.roomy,
        this.form.value.inform,
        this.form.value.rate
      ).subscribe(err => {
        if (!err) {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Dorini o\'zgartirishda xatolik yuz berdi'
          })

        }
        else {
          Swal.fire({
            type: 'success',
            title: 'Done',
            text: 'Dorini o\'zgartirish muvaffaqtiyatli amalga oshirildi',
          })
        }

        this.router.navigate(['/admin/pharms']);
      })


    }

  }

  getCategory() {
    this.categoryService.get().subscribe(res => {
      this.categorys = res.json();
    })
  }


}

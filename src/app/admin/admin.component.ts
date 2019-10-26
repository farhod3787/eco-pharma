import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { AuthService } from '../shared/services/auth-service';
import { AppService } from '../app.service';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public allow = false;

  constructor(
    private router: Router, 
    private authSvc: AuthService,
    private service : AppService
    
    ) {
    this.authVerify();
   }

  public ngOnInit() {

    $(document).ready(function($) {
      "use strict"; // Start of use strict
    
      $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    
      $(window).resize(function() {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        };
      });
    
      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });
    
      $(document).on('scroll', function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    
      $(document).on('click', 'a.scroll-to-top', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
      });
    
    } )

  }

  authVerify(){
    this.authSvc.get().subscribe((result)=>{
      var object = result.json();
      if( !object.isAdmin && !object.isModerator ){
        this.router.navigate(['login'])
      }
      else{
        this.allow = true;
      }

    },(err)=>{
      this.router.navigate(['login']) 
    })
  }


  alarm() {
    this.service.playSound();
  }


logout() {
  localStorage.removeItem("token");
  this.router.navigate(['login'])
}
  
  

}

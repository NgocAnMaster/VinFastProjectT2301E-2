/* This is your custom Javascript */

(function($){
  $(document).ready(function(){
    show_personal_setting()
    change_placeholder_editor_topic_content()
    margin_title_forum_have_sticky_mobile()
    slide_header_forum()
    click_discard_modal_reply()
    clear_text_field_search()
    clear_text_pop_up_reply()
    not_scroll_to_bottom_after_reply_submit()
    redirect_profile_page_after_upload_image()
    add_class_when_upload_image()
    add_class_whent_topic_closed()
    disable_footer_upload_video()
    add_class_no_reply_in_single_topic()
    disable_footer_upload_image()
    slide_profile_edit()
    add_text_personal_setting_user_edit_profile()
    button_share_link()
    action_mobile_in_forum()
    tab_jquery_ui_in_user_activity_log()
    datatable_in_user_activity_log()
    filter_activity_log()
    search_in_activity_log_mobile()

    tab_activity_log()
    open_popup_sort_topics_mobile()
    close_popup_sort_topics_mobile()
    // check_and_uncheck_radio_button()
    search_in_activity_log_desktop()
    filter_by_date_customer_introduction()
    filter_rank_user()
    change_order_when_click_radio_buton()
    filter_by_date_customer_introduction_mobile()
    filter_rank_user_mobile()
    filter_by_range_date_history_points_mobile()
    select_history_point_on_mobile()
    filter_by_date_topics_forums()
    filter_by_date_topics_forums_mobile()
    filter_by_status_topics_in_forums()
    filter_by_box_topic_in_forums()
    filter_by_status_topics_in_forums_mobile()
    filter_by_box_topic_in_forums_mobile()
    update_username_profile_limit()
    tab_parent()
    tab_child()
    slide_tab_title_child()
    if ($(window).width() <= 577){         
      slide_tab_title_parent()
      tab_parent()
    }
    slide_mobile_page_benefits_table_for_members()
    upvote_btn()
    // change_username3()
  });
  $(window).on('load', function(){
    show_personal_setting()
    slide_header_forum()
    clear_text_field_search()
    clear_text_pop_up_reply()
    not_scroll_to_bottom_after_reply_submit()
    redirect_profile_page_after_upload_image()
    add_class_when_upload_image()
    add_class_whent_topic_closed()
    slide_profile_edit()
    loadjs_first_in_activity_log()
   
  });

  $(window).on('scroll', function () {		
		show_back_to_top();
	});

  function show_personal_setting() {
      $('.field-visibility-settings').removeClass('bp-hide')
  }
  function change_placeholder_editor_topic_content() {
      $(".bbp_editor_topic_content").attr("data-placeholder","Nhập câu trả lời của bạn ở đây")  
  }
  function margin_title_forum_have_sticky_mobile() { 
    $('.bs-item-list .bs-item-wrap .bb-topic-status-wrapper').each(function(){
      $(this).parents('.bs-item-wrap').addClass('has-sticky');
    });
  }
  function slide_header_forum() {  
    $('.settings ul.subnav-mobile').slick({
      responsive: [
        {
          breakpoint: 3000,
          settings:"unslick"
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrow:false,
            prevArrow:false,
            nextArrow:false,
            draggable:true,
            speed: 300,
            useTransform: false
          }
        }
      ]
    });
  }
  function click_discard_modal_reply() {
    $(".bb_discard_topic_reply_draft").click(function(){
      $('.bb-icon-close').click();
    })
  }

  function change_text_widget_completion_widget() {
    $(".widget_bp_profile_completion_widget .widget-title").html('Hoàn thành hồ sơ của bạn')
    $(".widget_bp_profile_completion_widget .progress_text_label").html('Hoàn thành')
    $(".widget_bp_profile_completion_widget .single_section_wrap.incomplete .group_link").html('Thông tin cá nhân')
    $(".widget_bp_profile_completion_widget .single_section_wrap.progress_not_started .group_link").html('Ảnh đại diện')
    $(".widget_bp_profile_completion_widget .single_section_wrap.incomplete:last-child .group_link").html('Ảnh bìa')
  }
  function clear_text_field_search() {
    $(".search-field-top").val('');
  }
  function clear_text_pop_up_reply() {
    $(".button.submit").click(function(){
      $("#bbpress-forums .bb-modal.bbp-reply-form .bbp-the-content-wrapper .bbp-the-content p").html('');
    }); 
  }
  function not_scroll_to_bottom_after_reply_submit(){
    $('#bbp_reply_submit').click(function() {
      $('#bbp_reply_submit').animate({
          scrollTop : 0
      }, 500);
    });
  }
  function redirect_profile_page_after_upload_image() {
    $( document ).ajaxComplete(function() {
      if($(".bp-avatar-status p").hasClass("updated success")) {
        setTimeout(function() { 
          window.history.back();
      }, 1000);
      }
    });
  }

  function add_class_when_upload_image() {
    $("#bp-media-photo-next").click(function(){
      $(".media-uploader-footer").addClass("choose-collection");
    })
    $("#bp-media-prev").click(function(){
      $(".media-uploader-footer").removeClass("choose-collection");
      $("#bp-media-submit").removeClass("choose-collection");
    })
  }
  function add_class_whent_topic_closed(){
    if($(".bb-icon-lock-alt-open").hasClass("closed")){
      $(".bb-icon-lock-alt-open").parent().addClass('closed-topic')
    }
  }
  function disable_footer_upload_video(){
    $("#bp-add-video").click(function(){
      $(".bb-template-v2.videos #buddypress .bp-video-uploader .video-uploader-footer:not(.upload-success-video)").hide()
    })
    $("#buddypress .bp-video-uploader #bp-video-next").click(function(){
      $(".bb-template-v2.videos #buddypress .bp-video-uploader .video-uploader-footer.choose-album").show()
    })
  }
  function disable_footer_upload_image(){
   $(".bb-template-v2 #buddypress .bp-media-photo-uploader .media-uploader-footer").addClass("no-display");
   if($("#bp-media-photo-next").click(function(){
    $(".bb-template-v2 #buddypress .bp-media-photo-uploader .media-uploader-footer").removeClass("no-display");
   }));
   if($("#bp-media-prev").click(function(){
    $(".bb-template-v2 #buddypress .bp-media-photo-uploader .media-uploader-footer").addClass("no-display");
   }));
  }
  function add_class_no_reply_in_single_topic() {
    if($(".single-topic .bs-item-list").hasClass("topic-list-no-replies")) {
      $(".single-topic").addClass("no-reply-in-topic")
    }
  }
  function slide_profile_edit() {  
    $('body.profile-edit ul.subnav').slick({
      responsive: [
        {
          breakpoint: 3000,
          settings:"unslick"
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            arrow:false,
            prevArrow:false,
            nextArrow:false,
            draggable:true,
            speed: 300,
            variableWidth: true
          }
        }
      ]
    });
  }
  function add_text_personal_setting_user_edit_profile(){
    $(".field-visibility-settings-notoggle").prepend("<legend>Cài đặt cá nhân</legend>")
  }

  function button_share_link() {
    /* 
    Social Share Links:

    Facebook:
    https://www.facebook.com/sharer.php?u=[post-url]

    Twitter:
    https://twitter.com/share?url=[post-url]&text=[post-title]

    LinkedIn:
    https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

    Telegram:
    https://t.me/share/url?url=[post-url]&text=[post-title]

    */
    const facebookBtn = $(".facebook-btn");
    const twitterBtn = $(".twitter-btn");
    const linkedinBtn = $(".linkedin-btn");
    const telegramBtn = $(".telegram-btn");

    let postUrl = encodeURI(window.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");

    facebookBtn.attr("href",`https://www.facebook.com/sharer.php?u=${postUrl}`)
    twitterBtn.attr("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}`)
    linkedinBtn.attr( "href",`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`)
    telegramBtn.attr( "href",` https://t.me/share/url?url=${postUrl}&text=${postTitle}`)
  }
  function action_mobile_in_forum(){
    $(".bb-topic-reply-link-wrap-mobile ").click(function(){
      $(".bb-topic-reply-link-wrap-mobile").toggleClass("display-action")
      $(".bb-topic-reply-link-wrap-mobile .icon-action").toggleClass("icon-action-white")
    })
  }

  function tab_jquery_ui_in_user_activity_log(){
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  }
  function datatable_in_user_activity_log() {
      var base_url = window.location.origin;
      $('#table-member-introduction').DataTable({
        initComplete: function () {
          this.api()
              .columns([2,3])
              .every(function (d) {
                  var column = this;
                  var theadname = $("#table-member-introduction th").eq([d]).text();
                   select= $(
                    '<select class="form-control my-1"><option value="">' +
                      theadname +
                      "</option></select>"
                  )
                      // .appendTo($(column.header()).empty())
                      .appendTo('#filter-member')
                      .on('change', function () {
                          var val = $.fn.dataTable.util.escapeRegex($(this).val());

                          column.search(val ? '^' + val + '$' : '', true, false).draw();
                      });

                  column
                      .data()
                      .unique()
                      .sort()
                      .each(function (d, j) {
                          select.append('<option value="' + d + '">' + d + '</option>');
                      });
              });
      },
        ordering: false,
        pagingType: 'full_numbers',
        "language": {
          "search": "",
          "sSearchPlaceholder": "Tìm kiếm",
          "lengthMenu":'<div class="box-filter-member-introduction"><h2 class="member-introduction-title">Giới thiệu Thành viên</h2><div id="filter-member"></div><div>',
          "sInfo": "Xem _START_ - _END_ của _TOTAL_ ",
          "sInfoEmpty": "Xem 0 - 0 của 0 mục",
          "sInfoFiltered": "(đã lọc từ _MAX_ mục)",
          "oPaginate": {
            "sFirst": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/545cbc03-double-previous-arrow.png'/>",
            "sLast": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/feb0e847-double-next-arrow.png'/>",
            "sNext": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/7f6d20e3-next-arrow.png'/>",
            "sPrevious": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/5b76bf3d-previous-arrow.png'/>"
          },
          "sZeroRecords": 'Không tìm thấy kết quả'
        },    
      });
      $('#table-topic-in-forums').DataTable({
        ordering: false,
        autoWidth: false,
        pagingType: 'full_numbers',
        "language": {
          "search": "",
          "sSearchPlaceholder": "Tìm kiếm",
          "lengthMenu":'<h2 class="member-introduction-title">Bài viết trên Diễn đàn</h2>',
          "sInfo": "Xem _START_ - _END_ của _TOTAL_ ",
          "sInfoEmpty": "Xem 0 - 0 của 0 mục",
          "sInfoFiltered": "(đã lọc từ _MAX_ mục)",
          "oPaginate": {
            "sFirst": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/545cbc03-double-previous-arrow.png'/>",
            "sLast": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/feb0e847-double-next-arrow.png'/>",
            "sNext": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/7f6d20e3-next-arrow.png'/>",
            "sPrevious": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/5b76bf3d-previous-arrow.png'/>"
          },
          "sZeroRecords": 'Không tìm thấy kết quả'
        }, 
      });
      
      $('#gamipress-earnings-table').DataTable({
        ordering: false,
        autoWidth: false,
        pagingType: 'full_numbers',
        "language": {
          "search": "",
          "sSearchPlaceholder": "Tìm kiếm",
          "lengthMenu":'<h2 class="member-introduction-title">Lịch sử điểm thưởng</h2>',
          "sInfo": "Xem _START_ - _END_ của _TOTAL_ ",
          "sInfoEmpty": "Xem 0 - 0 của 0 mục",
          "sInfoFiltered": "(đã lọc từ _MAX_ mục)",
          "oPaginate": {
            "sFirst": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/545cbc03-double-previous-arrow.png'/>",
            "sLast": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/feb0e847-double-next-arrow.png'/>",
            "sNext": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/7f6d20e3-next-arrow.png'/>",
            "sPrevious": "<img src='"+ base_url +"/wp-content/themes/buddyboss-theme-child/assets/images/5b76bf3d-previous-arrow.png'/>"
          },
          "sZeroRecords": 'Không tìm thấy kết quả'
        }, 
      });
 
  }

  function pag_load_all_activity_log_mobile(page, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish, filter_status_post,filter_box_in_forum) {
    filter_activity_log = $('select#filter-activity-log').val();
    search_text = $('.box-search-activity-log-mobile input[type=search]').val();

    var data = {
      page: page,
      filter_activity_log: filter_activity_log,
      search_text: search_text,
      initial_date: initial_date,
      filter_rank: filter_rank,
      first_date: first_date,
      final_date: final_date,
      date_publish: date_publish,
      filter_status_post: filter_status_post,
      filter_box_in_forum: filter_box_in_forum,
      action: "pagination_load_activity_log"
    };

    $.ajax({
      url: activity_log_ajax.ajaxurl,
      type: 'POST',
      dataType : "JSON", 
      data: data,
      beforeSend: function(){
          
      },
      success: function(response) {

        $(".activity_log_pag_container").html(response.data);
        $('.activity_log_pag_container .activity-log-universal-pagination li.active').click(function(){
          var page = $(this).attr('p');
          filter_activity_log = $('select#filter-activity-log').val();
          search_text = $('.box-search-activity-log-mobile input[type=search]').val();
          initial_date = $("#initial_date_mobile").val();
          filter_rank = $('select#filter-rank-user-mobile').val();
          first_date = $("#first_date_mobile").val();
          final_date = $("#final_date_mobile").val();
          pag_load_all_activity_log_mobile(page, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish, filter_status_post,filter_box_in_forum);

        });
        var base_url = window.location.origin;
        if(response.null == "") {
          if(filter_activity_log =='customer-introduction'){
            $('.activity-log-universal-pagination').empty();
            $('.activity-log-universal-pagination').html('<div class="box-no-data"><img src="'+ base_url +'/wp-content/themes/buddyboss-theme-child/assets/images/07a85b4b-no-data.png"/><p class="no-data-activity-log">Bạn chưa có hoạt động nào<p></div>');
          } else {
            $('.activity-log-universal-pagination').empty();
            $('.activity-log-universal-pagination').html('<div class="box-no-data"><img src="'+ base_url +'/wp-content/themes/buddyboss-theme-child/assets/images/07a85b4b-no-data.png"/><p class="no-data-activity-log">Bạn chưa có hoạt động nào<p></div>');
          }
       
        }
      },
      error: function(response){             
          // console.log( response );
      }
    }) 
  }

  function pag_load_all_activity_log_desktop(page, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish, filter_status_post,filter_box_in_forum) {
    filter_activity_log = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
    class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
    search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
    // search_text = $('.box-search-activity-log input[type=search]').val();
    desktop = 'desktop'
    var data = {
      page: page,
      desktop: desktop,
      filter_activity_log: filter_activity_log,
      search_text: search_text,
      initial_date: initial_date,
      filter_rank: filter_rank,
      first_date: first_date,
      final_date: final_date,
      date_publish: date_publish,
      filter_status_post: filter_status_post,
      filter_box_in_forum: filter_box_in_forum,
      action: "pagination_load_activity_log"
    };

    $.ajax({
      url: activity_log_ajax.ajaxurl,
      type: 'POST',
      dataType: "JSON",
      data: data,
      beforeSend: function () {

      },
      success: function (response) {
        console.log(response);

        $(".activity_log_pag_container_" + filter_activity_log + "").html(response.data);
        $('.activity_log_pag_container_' + filter_activity_log + ' .activity-log-universal-pagination li.active').click(function () {
          var page = $(this).attr('p');
          search_text = $('.box-search-activity-log input[type=search]').val();
          filter_activity_log = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
          initial_date = $("#initial_date").val();
          filter_rank = $('select#filter-rank-user').val();
          first_date = $("#first_date").val();
          final_date = $("#final_date").val();
          date_publish = $("#date_publish").val();
          filter_status_post = $('select#filter-status-post').val();
          filter_box_in_forum = $('select#filter-box-in-forum').val();
          pag_load_all_activity_log_desktop(page, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish, filter_status_post,filter_box_in_forum);

        });
        var base_url = window.location.origin;
        if (response.null == "") {
          if (filter_activity_log == 'customer-introduction') {
            $('.activity-log-universal-pagination').empty();
            $('.activity-log-universal-pagination').html('<div class="box-no-data"><img src="' + base_url + '/wp-content/themes/buddyboss-theme-child/assets/images/07a85b4b-no-data.png"/><p class="no-data-activity-log">Bạn chưa có hoạt động nào<p></div>');
          } else {
            $('.activity-log-universal-pagination').empty();
            $('.activity-log-universal-pagination').html('<div class="box-no-data"><img src="' + base_url + '/wp-content/themes/buddyboss-theme-child/assets/images/07a85b4b-no-data.png"/><p class="no-data-activity-log">Bạn chưa có hoạt động nào<p></div>');
          }

        }
      },
      error: function (response) {

      }
    })
  }

  function filter_activity_log() {
    $('select#filter-activity-log').change(function(){
      value = $(this).val();
      search_text = $('.box-search-activity-log-mobile input[type=search]').val();
      $(".wrapper-filter-customer-introduction").removeClass('is-active-filter');
      $(".wrapper-filter-customer-introduction[data-tab=" + value + "]").addClass('is-active-filter');
      $("#error_log_mobile").html("");
      pag_load_all_activity_log_mobile(1, value, search_text);
      
    });
  }
  function search_in_activity_log_mobile() {
    var timer;  
    $(".box-search-activity-log-mobile input[type=search]").keydown(function(e){  
      search_text =  e.currentTarget.value;
      filter_activity_log = $('select#filter-activity-log').val();
      initial_date = $("#initial_date_mobile").val() ? $("#initial_date_mobile").val() : '';
      filter_rank = $('select#filter-rank-user-mobile').val() ? $('select#filter-rank-user-mobile').val() : '';
      first_date = $("#first_date_mobile").val() ? $("#first_date_mobile").val() : '';
      final_date = $("#final_date_mobile").val() ? $("#final_date_mobile").val() : '';
      date_publish = $("#date_publish_mobile").val();
      filter_status_post = $('select#filter-status-post-mobile').val();
      filter_box_in_forum = $('select#filter-box-in-forum-mobile').val();
      clearTimeout(timer);
      timer = setTimeout(function () {
        pag_load_all_activity_log_mobile(1, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish, filter_status_post,filter_box_in_forum);
      }, 1000);
    })
  }
  function tab_activity_log() {
    $('.page-template-page-activity-log-ajax .tab-activity-log .tab-item').click(function () {
      $('.page-template-page-activity-log-ajax .tab-activity-log .tab-item').removeClass('tab-active');
      $(this).addClass('tab-active');
      // attr = $(this).attr('data-tab');
      attr = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      pag_load_all_activity_log_desktop(1, attr)
      search_in_activity_log_desktop()
      filter_by_date_customer_introduction()
      filter_rank_user()
      filter_by_range_date_history_points()
    });
  }

  function search_in_activity_log_desktop() {


    var timer;
    class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
    $(".box-search-activity-log." + class_search + " input[type=search]").keydown(function (e) {
      search_text = e.currentTarget.value;
      filter_activity_log = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      initial_date = $("#initial_date").val() ? $("#initial_date").val() : '';
      filter_rank = $('select#filter-rank-user').val() ? $('select#filter-rank-user').val() : '';
      first_date = $("#first_date").val() ? $("#first_date").val() : '';
      final_date = $("#final_date").val() ? $("#final_date").val() : '';
      date_publish = $("#date_publish").val() ? $("#date_publish").val() : '';
      filter_status_post = $('select#filter-status-post').val();
      filter_box_in_forum = $('select#filter-box-in-forum').val();
      clearTimeout(timer);
      timer = setTimeout(function () {
        pag_load_all_activity_log_desktop(1, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date,date_publish,filter_status_post,filter_box_in_forum);
      }, 1000);
    })
  }

  function loadjs_first_in_activity_log() {
    $('#tabs.hidden').removeClass('hidden');
    $('.activity-log-header.hidden').removeClass('hidden');
  }


  // Filter by date picker in activity log : tab :customer-introduction
  function filter_by_date_customer_introduction() {
    $('#initial_date').change(function () {
      initial_date = $(this).val();
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      filter_rank = $('select#filter-rank-user').val();
      pag_load_all_activity_log_desktop(1, filter, search_text, initial_date, filter_rank);
    });
  }
   // Filter by date picker in activity log : tab :customer-introduction (mobile)
   function filter_by_date_customer_introduction_mobile() {
    $('#initial_date_mobile').change(function () {
      filter_acitivy_log_in_mobile()
    });
  }

  // Filter rank user in activity log : tab :customer-introduction
  function filter_rank_user() {
    $('select#filter-rank-user').change(function () {
      value = $(this).val();
      initial_date = $('#initial_date').val();
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      pag_load_all_activity_log_desktop(1, filter, search_text, initial_date, value);
    });
  }

  // Filter rank user in activity log : tab :customer-introduction (mobile)
  function filter_rank_user_mobile() {
    $('select#filter-rank-user-mobile').change(function () {
      filter_acitivy_log_in_mobile()
    });
  }

  // filter by range date in history point ajax : use for desktop and mobile
  function filter_by_range_date_history_point_ajax(first_date, final_date, pagload, filter, search_text, initial_date, filter_rank, error_log) {
    let s_first_date = first_date.split('-');
    let new_first_date = s_first_date[2] + '-' + s_first_date[1] + '-' + s_first_date[0];
    let s_final_date = final_date.split('-');
    let new_final_date = s_final_date[2] + '-' + s_final_date[1] + '-' + s_final_date[0];
    $(".tooltip-first-date").removeClass('active-tooltip');
    $(".tooltip-final-date").removeClass('active-tooltip');

    var date1 = new Date(new_first_date);
    var date2 = new Date(new_final_date);
    // date for US
    // var date1 = new Date(first_date);
    // var date2 = new Date(final_date);
    date1_format = date1.getTime();
    date2_format = date2.getTime();
    if (first_date == '' || final_date == '') {
      $(".tooltip-first-date").addClass('active-tooltip');
    } else {
      if (date1_format > date2_format) {
        $(".tooltip-final-date").addClass('active-tooltip');
      } else {
        $("#" + error_log + "").html("");
        if (pagload === 'desktop') {
          pag_load_all_activity_log_desktop(1, filter, search_text, initial_date, filter_rank, first_date, final_date);
        } else {
          pag_load_all_activity_log_mobile(1, filter, search_text, initial_date, filter_rank, first_date, final_date);
        }

      }
    }
  }
  // filter by range date history points desktop
  function filter_by_range_date_history_points() {
    class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
    search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
    filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
    filter_rank = '';
    initial_date = '';
    pagload = 'desktop';
    error_log = 'error_log'

    $('#final_date').change(function () {
      first_date = $("#first_date").val();
      final_date = $(this).val();
      filter_by_range_date_history_point_ajax(first_date, final_date, pagload, filter, search_text, initial_date, filter_rank, error_log)

    });

    $('#first_date').change(function () {
      first_date = $(this).val();
      final_date = $("#final_date").val();
      filter_by_range_date_history_point_ajax(first_date, final_date, pagload, filter, search_text, initial_date, filter_rank, error_log)

    });
  }

  // filter by range date history points mobile
  function filter_by_range_date_history_points_mobile() {
    search_text = $('.box-search-activity-log-mobile input[type=search]').val();
    filter = $('select#filter-activity-log').val();
    filter_rank = '';
    initial_date = '';
    pagload = 'mobile';
    error_log = 'error_log_mobile'

    $('#final_date_mobile').change(function () {
      first_date = $("#first_date_mobile").val();
      final_date = $(this).val();
      filter_by_range_date_history_point_ajax(first_date, final_date, pagload, filter, search_text, initial_date, filter_rank, error_log)

    });

    $('#first_date_mobile').change(function () {
      first_date = $(this).val();
      final_date = $("#final_date_mobile").val();
      filter_by_range_date_history_point_ajax(first_date, final_date, pagload, filter, search_text, initial_date, filter_rank, error_log)

    });
  }

  // Filter by date picker in activity log : tab :topics-forums
  function filter_by_date_topics_forums() {
    $('#date_publish').change(function () {
      date_publish = $(this).val();
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      filter_status_post = $('select#filter-status-post').val();
      filter_box_in_forum = $('select#filter-box-in-forum').val();
      initial_date = $("#initial_date").val() ? $("#initial_date").val() : '';
      filter_rank = $('select#filter-rank-user').val() ? $('select#filter-rank-user').val() : '';
      first_date = $("#first_date").val() ? $("#first_date").val() : '';
      final_date = $("#final_date").val() ? $("#final_date").val() : '';
      pag_load_all_activity_log_desktop(1, filter, search_text,initial_date,filter_rank,first_date,final_date, date_publish, filter_status_post,filter_box_in_forum);
    });
  }

  // Filter by date picker in activity log : tab :topics-forums (mobile)
  function filter_by_date_topics_forums_mobile() {
    $('#date_publish_mobile').change(function () {
      filter_acitivy_log_in_mobile()
    });
  
  }

  // Filter status post in activity log : tab :topics-forums
  function filter_by_status_topics_in_forums() {
    $('select#filter-status-post').change(function () {
      filter_status_post = $(this).val();
      initial_date = $('#initial_date').val();
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      date_publish = $("#date_publish").val() ? $("#date_publish").val() : '';
      filter_box_in_forum = $('select#filter-box-in-forum').val();
      initial_date = $("#initial_date").val() ? $("#initial_date").val() : '';
      filter_rank = $('select#filter-rank-user').val() ? $('select#filter-rank-user').val() : '';
      first_date = $("#first_date").val() ? $("#first_date").val() : '';
      final_date = $("#final_date").val() ? $("#final_date").val() : '';
      pag_load_all_activity_log_desktop(1, filter, search_text,initial_date,filter_rank,first_date,final_date, date_publish, filter_status_post,filter_box_in_forum);
    });
  }

   // Filter status post in activity log : tab :topics-forums (mobile)
  function filter_by_status_topics_in_forums_mobile() {
    $('select#filter-status-post-mobile').change(function () {
      filter_acitivy_log_in_mobile()
    });
  }
  // Filter box topic in activity log : tab :topics-forums
  function filter_by_box_topic_in_forums() {
    $('select#filter-box-in-forum').change(function () {
      filter_box_in_forum = $(this).val();
      initial_date = $('#initial_date').val();
      class_search = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-search');
      search_text = $(".box-search-activity-log." + class_search + " input[type=search]").val();
      filter = $('.page-template-page-activity-log-ajax .tab-activity-log li.ui-tabs-active .tab-item').attr('data-tab');
      date_publish = $("#date_publish").val() ? $("#date_publish").val() : '';
      filter_status_post = $('select#filter-status-post').val();
      initial_date = $("#initial_date").val() ? $("#initial_date").val() : '';
      filter_rank = $('select#filter-rank-user').val() ? $('select#filter-rank-user').val() : '';
      first_date = $("#first_date").val() ? $("#first_date").val() : '';
      final_date = $("#final_date").val() ? $("#final_date").val() : '';
      pag_load_all_activity_log_desktop(1, filter, search_text,initial_date,filter_rank,first_date,final_date, date_publish, filter_status_post,filter_box_in_forum);
    });
  }

  // Filter box topic in activity log : tab :topics-forums (mobile)
  function filter_by_box_topic_in_forums_mobile() {
    $('select#filter-box-in-forum-mobile').change(function () {
      filter_acitivy_log_in_mobile()
    });
  }

  //  open popup sort topic in forums  in mobile
  function open_popup_sort_topics_mobile() {
    $('.header-sort-topic-forum-mobile .filter-image').click(function () {
      $('.popup-sort-topic').show()
      $("#form-sort-topic").show();
      $('.bb-modal-overlay-sort-topic').css("opacity", 1);
    })
  }

  //  close popup sort topic in forums  in mobile
  function close_popup_sort_topics_mobile() {
    $('.close-pop-up').click(function () {
      $("#form-sort-topic").hide();
      $('.popup-sort-topic').hide()
      $('.header-sort-topic-forum-mobile .filter-image').toggleClass('active-filter');
    })
  }

  //  check and un check radio button
  function check_and_uncheck_radio_button() {
    $(document).find("input:checked[type='radio']").addClass('bounce');
    $("input[type='radio']").click(function () {
      $(this).prop('checked', false);
      $(this).toggleClass('bounce');

      if ($(this).hasClass('bounce')) {
        $(this).prop('checked', true);
        $(document).find("input:not(:checked)[type='radio']").removeClass('bounce');
      }
    });
  }

  // change order when click radio buton on sort topic in forum in mobile
  function change_order_when_click_radio_buton() {
    $("input[type='radio']").click(function () {
    data_order = $(this).attr('data-order');
      if(data_order ==='asc'){
          $("input.order").val('asc')
      } else {
          $("input.order").val('desc') 
      }
    });
  }

  function select_history_point_on_mobile() {
    if ($(window).width() <= 768) {
      var pathArray = window.location.href.split('/');
      var last = pathArray.slice(-1)[0]
      if (last === '#tabs-3') {
        var history_points = 'history-points';
        $("#filter-activity-log option[value='" + history_points + "']").attr('selected', 'selected');
        search_text = $('.box-search-activity-log-mobile input[type=search]').val();
        $(".wrapper-filter-customer-introduction").removeClass('is-active-filter');
        $(".wrapper-filter-customer-introduction[data-tab=" + history_points + "]").addClass('is-active-filter');
        $("#error_log_mobile").html("");
        pag_load_all_activity_log_mobile(1, history_points, search_text);

      }
    }

  }

   function filter_acitivy_log_in_mobile() {
      search_text = $('.box-search-activity-log-mobile input[type=search]').val();
      initial_date = $("#initial_date_mobile").val();
      filter_rank = $('select#filter-rank-user-mobile').val();
      filter_activity_log = $('select#filter-activity-log').val();
      first_date = $("#first_date_mobile").val();
      final_date = $("#final_date_mobile").val();
      date_publish = $("#date_publish_mobile").val();
      filter_status_post = $('select#filter-status-post-mobile').val();
      filter_box_in_forum = $('select#filter-box-in-forum-mobile').val();
      pag_load_all_activity_log_mobile(1, filter_activity_log, search_text, initial_date, filter_rank, first_date, final_date, date_publish, filter_status_post,filter_box_in_forum)
   }
   function update_username_profile_limit() {
    profile_field_id = $('.box-fieldset.change-username ').attr('data-profile-id');
    var display_name = $('#field_'+profile_field_id).val();
    if(display_name == '') {
      display_name = $('.box-fieldset.change-username ').attr('data-username-display');
      $('#field_'+profile_field_id).val(display_name);
    }
    $('#profile-edit-form').on('submit', function(event){
      if($(".box-fieldset.change-username").hasClass('can-update')){
        event.preventDefault();
        profile_field_id = $('.box-fieldset.change-username ').attr('data-profile-id');
        var display_name = $('#field_'+profile_field_id).val();

     
        $('#new-display-name-error .string_and_number').removeClass('false');
        $('#new-display-name-error .specialcharacters').removeClass('false');
        $('#new-display-name-error .minlength').removeClass('false');
        check_special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        check_string_number = /[0-9][a-zA-Z]|[a-zA-Z][0-9]|[0-9] [a-zA-Z]|[a-zA-Z] [0-9]/;
        check_min_length = /^(?=.{3,}).*$/;
        count_error ='';

        
        if (!check_min_length.test(display_name)){
          $('.box-fieldset.change-username').addClass('error');
          $('#new-display-name-error').show();
          $('#new-display-name-error .minlength').addClass('false');
          $('#field_'+profile_field_id).focus()
          count_error += 1;
        }
        if (check_special_characters.test(display_name)){
          $('.box-fieldset.change-username ').addClass('error');
          $('#new-display-name-error').show();
          $('#new-display-name-error .specialcharacters').addClass('false');
          $('#field_'+profile_field_id).focus()
          count_error += 1;
        }
    
        if(count_error > 0) {
          return
        }
        $('#new-display-name-error').hide();
        $('.box-fieldset.change-username ').removeClass('error');

        var user_id= $('#user-id').val();
        var data = {
          display_name:display_name,
          user_id:user_id,
          action: "update_username_in_profile_limit"
      };
  
        $.ajax({
          url: activity_log_ajax.ajaxurl,
          type: 'POST',
          dataType: "JSON",
          data: data,
          beforeSend: function(){
          },
          success:function(response)
          {
            // console.log(response);
            if(response.result == 1) {
              $('#profile-edit-form').unbind('submit').submit()
            }
            if(response.can_update == 1 || response.can_update == 2) {
             $('#profile-edit-form').unbind('submit').submit()
            }
          },
          error: function(response){             
            // console.log( response );
        }
          
        }); 
      } else {
        $('#profile-edit-form').unbind('submit').submit()
      }
    
   

    });
  }

  function show_back_to_top() {
    let back_to_top = $(".elementor a#back-top-top")
    if ($(this).scrollTop() > 600) {
      back_to_top.css({'opacity':'1','transition':'all 0.5s'})
    } else {
      back_to_top.css({"opacity": "0",'transition':'all 0.5s'})
    }
  }

  function tab_parent() {
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');  
      var tab_child_id = $(this).attr('data-tab-child');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $("ul.tabs-child .tab-link").removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id ).addClass('current');
      $("ul.tabs-child .tab-link[data-tab=" + tab_child_id + "]").addClass('current');
      $("#"+tab_child_id).addClass('current');

      if($(window).width() <= 577){         
        var width_slide = $("#"+tab_id +" .slick-track" ).width();
    
        if(width_slide < 1 ){
           $("#"+tab_id +" .slick-dots .slick-active button" ).click();
           $('body,html').animate({
              scrollTop : 1275  
              }, 1);
          }     
          
      }   
     
    })
  }
  function tab_child() {
    $('ul.tabs-child li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs-child li').removeClass('current');
      $('.container-child .tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  }
  function slide_tab_title_child() {
    $('ul.step-register-list').slick({
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrow:false,
          prevArrow:false,
          nextArrow:false,
          draggable:true,
          speed: 300,
          useTransform: false,
          dots: true
        }
      }
    ]
  });
  }
  function slide_tab_title_parent() {
      $('ul.tabs').slick({
      responsive: [
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrow:false,
            prevArrow:false,
            nextArrow:false,
            draggable:true,
            speed: 300,
            useTransform: false,
          }
        }
      ]
    });
  }

  function slide_mobile_page_benefits_table_for_members() {
    $('.slide-on-mobile').each(function(){
    
      var SlideNav = $('.slider-nav', $(this)); 
      var SlideFor = $('.slider-for', $(this)); 
  
      SlideNav.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          arrows: false,
          fade: true,
          dots: true,
          asNavFor: '.' + SlideNav.attr('data-for')
      })
      
      SlideFor.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          asNavFor: '.' + SlideFor.attr('data-nav'),
          arrows: false,
          dots: false,
      });
  
  })
  }

  function upvote_btn(){
    $('.upvote-btn').on('click', function(){
      $('.box-upvote').removeClass('current');
      $(this).parent().addClass('current');
      var post_id = $(this).data('id');
      var post_type = $(this).data('type');
      var post_author = $(this).data('author');
      var user_is_upvoted = $('.box-upvote.current .likes');
    
      $clicked_btn = $(this);
      if ($clicked_btn.hasClass('upvote-color')) {
         button = 'upvote';
      } else if($clicked_btn.hasClass('un-upvote-color')){
        button = 'downvote';
      }
    
      var data = {
        action: "button_upvote",
        button: button,
        post_id: post_id,
        post_type: post_type,
        post_author: post_author
      };
      $.ajax({
        url: activity_log_ajax.ajaxurl,
        type: 'POST',
        dataType: "JSON",
        data: data,
        success: function(response){
          // console.log(response);
          if (response.action == "upvote") {
            $clicked_btn.removeClass('upvote-color');
            $clicked_btn.addClass('un-upvote-color');
            user_is_upvoted.removeClass('upvote-color');
            user_is_upvoted.addClass('un-upvote-color');
          } else if(response.action == "downvote") {
            $clicked_btn.removeClass('un-upvote-color');
            $clicked_btn.addClass('upvote-color');
            user_is_upvoted.removeClass('un-upvote-color');
            user_is_upvoted.addClass('upvote-color');
          }
          // display the number of likes and dislikes
          $clicked_btn.siblings('span.likes').text(response.total_up_vote);
  
        }
      });		
    
    });
  }

})(jQuery);

/* This is your custom Javascript */
function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
}


function validate_pwd(password){
    let strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

    if (!strong.test(password)){
        return false;
    }
    
    if (password.trim()!=password){
      return false;
    }
    return true;
}

function validate_pwd_uppercase (password){   
	return password == password.toLowerCase() ? false : true;	
}

function create_toggle_password(password_field){	
	toggleBtn = jQuery('<a href="#" class="bb-toggle-password"></a>');
	toggleBtn.html('<i class="bb-icon-l bb-icon-eye"></i>');
	toggleBtn.click(function(){
		var type = password_field.attr('type');
		if( type == 'input' ){ password_field.attr('type', 'passaword'); } else { password_field.attr('type', 'input') }
	});
	
	password_field.before(toggleBtn);
}

document.addEventListener('DOMContentLoaded', function() {
    var form_id = '';
    $("form").each(function() {
		if (this.id.indexOf('ulp-reset-password')>0){
			form_id = this.id;
		}
    });	
    if (form_id!=''){
        form_id = '#'+form_id;
    }
    
	$('#ulp-reset-password-26e296fd input[type=submit].ulp-button').click(function(e){
		
		if( $('#ulp-reset-password-26e296fd #ulp-new-password').length ){
			e.preventDefault();
			$('.wpulike-notification').remove();
			var password = jQuery('#ulp-new-password').val();
			if (validate_pwd(password)) {
				$('#ulp-reset-password-26e296fd').submit();
				return true;
			}
			else{
				
				$('.wpulike-notification').remove();
				$('.wpulike-password-strong').remove();
				
				let strong1 = new RegExp('(?=.*[a-z])'); let message1 = 'Ít nhất 1 ký tự viết thường';
				let strong2 = new RegExp('(?=.*[A-Z])'); let message2 = 'Ít nhất 1 ký tự in hoa';
				let strong3 = new RegExp('(?=.*[0-9])'); let message3 = 'Ít nhất 1 ký tự số';
				let strong4 = new RegExp('(?=.*[^A-Za-z0-9])'); let message4 = 'Chứa ít nhất 1 trong những ký tự đặc biệt:  ~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ?';
				let strong5 = new RegExp('(?=.{10,})'); let message5 = 'Dài ít nhất 10 ký tự';

				
				let validate_case1 = strong1.test(password) ? 'info' : 'error';
				let validate_case2 = strong2.test(password) ? 'info' : 'error';
				let validate_case3 = strong3.test(password) ? 'info' : 'error';
				let validate_case4 = strong4.test(password) ? 'info' : 'error';
				let validate_case5 = strong5.test(password) ? 'info' : 'error';
				
				let message = '<strong>Mật khẩu của bạn nên có:</strong>';
				message += '<div class="wpulike-message wpulike-'+ validate_case1 +'">' + message1 + '</div>';
				message += '<div class="wpulike-message wpulike-'+ validate_case2 +'">' + message2 + '</div>';
				message += '<div class="wpulike-message wpulike-'+ validate_case3 +'">' + message3 + '</div>';
				message += '<div class="wpulike-message wpulike-'+ validate_case4 +'">' + message4 + '</div>';
				message += '<div class="wpulike-message wpulike-'+ validate_case5 +'">' + message5 + '</div>';
				
				message = '<div class="wpulike-password-strong">'+ message +'</div>';
				
				$('.ulp-submit-field').before(message);
				
				return false;
			}
		}
		
	});
	
	
	if( jQuery('.ulp-reset-password input#ulp-new-password').length && jQuery('#ulp-reset-password-26e296fd #ulp-re-password').length ){
		btn1 = jQuery('#ulp-reset-password-26e296fd #ulp-new-password');
		btn2 = jQuery('#ulp-reset-password-26e296fd #ulp-re-password');

		create_toggle_password(btn1);
		create_toggle_password(btn2);
	}	
	
    if( jQuery('#ulp-login-26e296fd #ulp-username').length ){
		document.getElementById("ulp-username").tabIndex = 1;
		document.getElementById("ulp-password").tabIndex = 2;
		document.getElementById("ulp-remember").tabIndex = 3;
		
		$('#ulp-remember').parents('.ulp-flex-col-xs-12').addClass('ulp-remember-wrap');
		$('#ulp-remember').parents('.ulp-flex-col-xs-12').next().addClass('ulp-remember-wrap forgot-wrap');
	}

});

var wpulikebtns;
jQuery(document).ready(function($){
	wpulikebtns = [];	
	
	// createSnowflakes(100);  
	
	function wpulike_discussion($obj){ 
		var wpulike  = $obj.find('.wpulike-is-pro'),
			likebtn  = $obj.find('.ulike-fake'),
			count    = parseInt(wpulike.find('.count-box').attr('data-ulike-counter-value')),
			count2    = parseInt(wpulike.find('.count-box').text()),
			is_liked = false;

		wpulike.attr('data-ulike-counter-v3s-1', count);
		wpulike.attr('data-ulike-counter-v3s-2', count2);
		if(!isNaN(count)){
			//wp_ulike_is_not_liked || wp_ulike_is_liked
			is_liked = wpulike.find('.wp_ulike_is_liked').length ? true : false;	
			if(is_liked){
				likebtn.addClass('wp_ulike_is_liked');
			}
			else{
				likebtn.removeClass('wp_ulike_is_liked');
			}
			wpulike.show();
		}
		else{
			likebtn.removeClass('wp_ulike_is_liked');
			wpulike.hide();
		}
	}

	$(document).on('focus', '#bb-album-title', function(){
		$(this).removeClass('error');
	});

	$(document).on('click', '#cancel-comment-reply-link', function(){
		$('textarea#comment').val('');
		return false;
	});

	$(document).on('click', '.comment-footer .ulike-fake', function(){
		var wrap = jQuery(this).parents('.comment-body');
		wrap.find('.wp_ulike_btn').click();

		wrap.find('.wpulike-is-pro').show();
		wpulikebtns.push(wrap);
		$(this).toggleClass('wp_ulike_is_liked');
	})
		
	$(document).on('click', '.v3s-like-btn', function(){
		var wrap = $(this).parents('.bbp-reply-content');
		wrap.find('.wp_ulike_btn').click();
		wrap.find('.wpulike-is-pro').show();
		wpulikebtns.push(wrap);
		$(this).toggleClass('wp_ulike_is_liked');
	})

	$('.comment-body').each(function(){
	    wpulike_discussion( $(this) );	    
	});

	$('.bbp-reply-content').each(function(){
	    wpulike_discussion( $(this) );	    
	});

	if( jQuery('#commentform').length ){
		commentform_action = jQuery('#commentform').attr('action');
		
		jQuery( document ).ajaxComplete(function( event, xhr, settings ) {
			$('.comment-body').each(function(){
			    wpulike_discussion( $(this) );	    
			});
		});		
	}

	if( jQuery('body').hasClass('single-topic') && jQuery('#new-post').length ) {
		jQuery( document ).ajaxComplete(function( event, xhr, settings ) {
			if( xhr.status == 200 && (undefined !== xhr.responseJSON.reply_type) && xhr.responseJSON.reply_type == "new" ){
				var total_reply_count = xhr.responseJSON.total_reply_count.match(/\d+/)[0];
				if( jQuery('.vin3s-box-ulike.topic_reply_count').length ){
					jQuery('.vin3s-box-ulike.topic_reply_count .number').text(total_reply_count);
					jQuery('.vin3s-box-ulike.topic_reply_count .number').attr('data-comments-number', total_reply_count);
				}				

				if( $('#bbp-temp-form-div').length  ){
					var form = $('.bbp-reply-form');

					$('#new-post input[name="bbp_reply_to"]').val(0);

					$('#bbp-temp-form-div').append(form).show();
				}

				if( $('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').length ){
					$('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').removeClass('disable');
				}

				// window.history.pushState(null, null, xhr.responseJSON.redirect_url);
				// location.reload();

				// $([document.documentElement, document.body]).animate({
		  //           scrollTop: $("#post-" + xhr.responseJSON.reply_id).offset().top - 100
		  //       }, 600);
			}
		});
	}

	$(document).on("WordpressUlikeUpdated", function(element){
		if( wpulikebtns.length ){
			for(i=0; i<wpulikebtns.length; i++){
				wpulike_discussion(wpulikebtns[i]);
				// wpulikebtns.splice(i, 1);
			}

			//wpulikebtns = [];
		}
	});

	$( '.bbp-reply-form' ).on( 'bbp_after_submit_reply_form', function(response, topic_id){
		$('.replies-content .content-no-reply').hide()
	} );
	
	$('#gdpol-poll-status .gdpol-poll-status').click(function(){
	    is_checked = $(this).is(':checked');
	    $('#new-post .gdpol-poll-question').removeClass('error');
	    $('.gdpol-responses-list input[type="text"].error').removeClass('error');
	})

	 $('.gdpol-new-response').on('click', function(){
        if( $('.gdpol-responses-list li').length >= 6 ){
            alert('Bạn chỉ được nhập tối da 6 câu trả lời!'); 
            return false;
        }
    })

 $('.gdpol-poll-question,.gdpol-responses-list input[type="text"]').on('focus', function(){
		$(this).removeClass('error');
	})

	if( $('#new-post .gdpol-responses-list input[type="text"].required').length || $('#new-post .gdpol-poll-question').length ){
		let new_topic_form = $('#new-post');
		$('#new-post #bbp_topic_submit').click(function(){			
			if( $('#new-post .gdpol-poll-status').is(':checked') ){
				$('#new-post .gdpol-responses-list input[type="text"].required').each(function(){
					val = $(this).val().trim();
					if(val.length == 0){
						$(this).addClass('error');
					}
					else{
						$(this).removeClass('error');	
					}
				});

				if( $('#new-post .gdpol-poll-question').val().trim().length == 0 ){
					$('#new-post .gdpol-poll-question').addClass('error');
				}
				else{
					$('#new-post .gdpol-poll-question').removeClass('error');	
				}			
			}
			else{				
				$('.gdpol-poll-question').removeClass('error');	
				$('.gdpol-responses-list input[type="text"].error').removeClass('error');
			}
			
			is_has_poll = $('.gdpol-poll-status').is(':checked');

			if(is_has_poll && $('.gdpol-poll-question.error').length){
				let error_message = $('.gdpol-poll-question');			
				$([document.documentElement, document.body]).animate({
					scrollTop: error_message.offset().top - 70
				}, 500);

				return false;
			}

			if(is_has_poll && $('.gdpol-responses-list.error').length){
				let error_message = $('.gdpol-responses-list');			
				$([document.documentElement, document.body]).animate({
					scrollTop: error_message.offset().top - 70
				}, 500);

				return false;
			}

			if( $('.gdpol-responses-list input[type="text"].required.error').length ){				
				let error_message = $('.gdpol-responses-list');			
				$([document.documentElement, document.body]).animate({
					scrollTop: error_message.offset().top - 70
				}, 500);

				return false;
			} 

			$('#new-post').submit();
			return true;
		})
	}

	// Upvote button for comment, topic in forum
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
          console.log(response);
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
	$(document).on('click', '.load-more-threa-replies a', function(){
		$(this).addClass('button-load-more-posts post-infinite-scroll loading').html('Đang tải...');

		btn         = $(this);
		threaded    = btn.parent().prev();
		reply_ids   = $(this).data('reply_ids');
		found_posts = $(this).data('found_posts');
		paged       = $(this).attr('data-paged'); console.log(paged);
		topic_id    = $(this).data('topic');
		reply_id    = $(this).data('reply');
		depth       = $(this).data('depth');

		$.post(VinFrontend.ajaxurl, {action:'vin3s_get_threaded_replies', topic_id: topic_id, reply_id: reply_id, depth:depth, reply_ids:reply_ids, found_posts: found_posts, paged: paged}, 
			function(response){
			
			btn.hide();

			if(response.success){
				threaded.append(response.data);
				upvote_btn()
				//button-load-more-posts post-infinite-scroll loading
				btn.removeClass('button-load-more-posts');
				btn.removeClass('post-infinite-scroll');
				btn.removeClass('loading');

				btn.attr('data-paged', parseInt(paged) + 1);
				btn.attr('data-aaa', parseInt(paged) + 1);
				
				post_loaded = $('> li', threaded).length;
				if(post_loaded < found_posts){
					more_posts = found_posts - post_loaded;
					btn.text('Xem thêm '+ more_posts +' bình luận');
					btn.show();
				}

			}
			else{
				console.log(response.data)
			}
		})

		return false;
	});

	$(document).on('click', '.v3s-reply-btn', function(){ console.log(1);
		var post_id  = $(this).data('topic_id');
		var reply_id = $(this).data('reply_id');

		if( $('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').length ){
			$('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').removeClass('disable');
		}

		if( $('#bbp-template-notices .error').length ){
			$('#bbp-template-notices .error').remove();
		}

		if( $('#forums-media-button.active').length ){
			$('#forums-media-button').click();
		}
		
		if( $('#show-toolbar-button.active').length ){
			$('#show-toolbar-button').click();
		}

		// reset form
		$('#bbpress-forums .bbp-form .bbp_editor_reply_content:not(.emojionearea)').html("")
		$('[name="bbp_media"]').val("");
		$('[name="bbp_media_gif"]').val("");
		$('[name="bbp_reply_content"]').val("");
		$('.gif-image-remove').trigger('click');

		addReply.moveForm('post-' + reply_id,'' + reply_id,'new-reply-' + post_id,'' + post_id);
		
		$('.single-topic #bbpress-forums .bs-item-list li .bb-modal.bb-modal-box').show();
		$('.bbp_editor_reply_content')[0].focus()
		return false;
	})

	$(document).on('click', '#whats-new-toolbar .post-elements-buttons-item.media-support.no-click', function(){
		$('[name="bbp_media"]').val("");
		if( $('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').length ){
			$('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').removeClass('disable');
		}
	});

	$(document).on('click', '[data-modal-id="bbp-reply-form"]', function(){
		// reset form
		$('#bbpress-forums .bbp-form .bbp_editor_reply_content:not(.emojionearea)').html("")
		$('[name="bbp_media"]').val("");
		$('[name="bbp_media_gif"]').val("");
		$('[name="bbp_reply_content"]').val("");
		$('.gif-image-remove').trigger('click');
		$('#forums-media-button.action').trigger('click');
		$('#forums-media-button.active').trigger('click');
		$('#new-post input[name="bbp_reply_to"]').val(0);
		
		if( $('#bbp-template-notices .error').length ){
			$('#bbp-template-notices .error').remove();
		}
				
		if( $('#bbp-temp-form-div').length  ){
			var form = $('.bbp-reply-form');
			$('#bbp-temp-form-div').append(form).show();
		}
	});

	$(document).on('click', '[data-modal-id="bbp-topic-form"]', function(){
		// reset form
		$('#bbpress-forums .bbp-form .bbp_editor_reply_content:not(.emojionearea)').html("")
		$('#bbp_topic_title').val("");
		$('#bbp_topic_content').val("");
		$('.bbp_editor_topic_content[data-placeholder]').html("");
		$('[name="bbp_media"]').val("");
		$('[name="bbp_media_gif"]').val("");
		$('[name="bbp_reply_content"]').val("");
		$('.gif-image-remove').trigger('click');
		$('#forums-media-button.action').trigger('click');
		$('#forums-media-button.active').trigger('click');					
	});

	$(document).on('click', '#bb_reply_discard_draft', function(){
		var form = $(this).parents('.bbp-reply-form');

		$('#bbp-temp-form-div').append(form).show();
		$('#new-post input[name="bbp_reply_to"]').val(0);

		if( $('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').length ){
			$('#whats-new-toolbar .post-elements-buttons-item.post-gif.disable').removeClass('disable');
		}

		// reset form
		$('#bbpress-forums .bbp-form .bbp_editor_reply_content:not(.emojionearea)').html("")
		$('[name="bbp_media"]').val("");
		$('[name="bbp_media_gif"]').val("");
		$('[name="bbp_reply_content"]').val("");
		$('.gif-image-remove').trigger('click');
	});

	$('.frm-fluent-form .ff-el-group.upload-field .ff-uploaded-list').each(function(){
		var list = $(this), upload = list.prev(); list.after(upload);
	})
		

	$('form.frm-fluent-form').each(function(){
		var btn_submit = $('.ff-btn-submit', $(this));
		
		btn_submit.attr('disabled', 'disabled');
		$('.ff-el-form-control', $(this)).on("change keyup paste", function(){	
			btn_submit.removeAttr('disabled');
		});
	})
		
	$('.ff-btn-submit').attr('disabled', 'disabled');
		
    $('.bb-signup-field input').focus(function () {
        $(this).parents('.bb-signup-field').addClass('focused');
    }).blur(function () {
        if( $(this).val().length == 0 ){
            $(this).parents('.bb-signup-field').removeClass('focused');
            // $(this).parents('.editfield').removeClass('focused');

        }
    });

    $('.editfield input').focus(function () {
        $(this).parents('.editfield').addClass('focused');
    }).blur(function () {
        if( $(this).val().length == 0 ){
            $(this).parents('.editfield').removeClass('focused');

        }
    });  
	
	$('#back-top-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });

	$('.news-content table,  .bbp-topic-content table').each(function(){
	    table = $(this);
	    wrap = table.parent(); 
	    if( !wrap.hasClass('response-table') ){
	        table.wrap('<div class="response-table"></div>');
	    }
	    
	});

	if( $('main').length && $('.bb-sticky-sidebar').length ){
		if( $('main').height() <= $('.bb-sticky-sidebar').height()  ){
			$('.bb-sticky-sidebar').addClass('no-sticky');
		}
	}

})

jQuery(function () {
  var d = function () {};
  jQuery(document)
    .delegate(".b-ball_bounce", "mouseenter", function () {
      b(this);
      m(this);
    })
    .delegate(".b-ball_bounce .b-ball__right", "mouseenter", function (i) {
      i.stopPropagation();
      b(this);
      m(this);
    });

  var g = 36;

  function b(n) {
    if (n.className.indexOf("b-ball__right") > -1) {
      n = n.parentNode;
    }
    var i = /b-ball_n(\d+)/.exec(n.className);
    var j = /b-head-decor__inner_n(\d+)/.exec(n.parentNode.className);
    if (i && j) {
      i = parseInt(i[1], 10) - 1;
      j = parseInt(j[1], 10) - 1;
      d((i + j * 9) % g);
    }
  }
  function m(j) {
    var i = jQuery(j);
    if (j.className.indexOf(" bounce") > -1) {
      return;
    }
    i.addClass("bounce");

    function n() {
      i.removeClass("bounce").addClass("bounce1");

      function o() {
        i.removeClass("bounce1").addClass("bounce2");

        function p() {
          i.removeClass("bounce2").addClass("bounce3");

          function q() {
            i.removeClass("bounce3");
          }
          setTimeout(q, 300);
        }
        setTimeout(p, 300);
      }
      setTimeout(o, 300);
    }
    setTimeout(n, 300);
  }
});
jQuery("a.page-scroll").bind("click", function (event) {
  var $anchor = jQuery(this);
  jQuery("html, body")
    .stop()
    .animate(
      {
        scrollTop: jQuery($anchor.attr("href")).offset().top - 50
      },
      1250,
      "easeInOutExpo"
    );
  event.preventDefault();
});

function createSnowflakes(quantity) {
	for(var count = 0; count < quantity; count++) {
		var snowflakeHtml = createSnowflake();
		jQuery(".storm").append(snowflakeHtml);
	}
}

function createSnowflake() {
  var points = randomFromInterval(6,12);
  var top = randomFromInterval(-300,0);
  var left = randomFromInterval(1,1920);
  var animation_duration = randomFromInterval(5,25);
  
  var snowflakeHtml = '<div class="snow" style="top:' + top + 'px; left:' + left + 'px; -webkit-animation-duration: ' + animation_duration + 's">';
  for(var c = 0; c < points; c++){
    snowflakeHtml += '<div class="point point' + points+'"></div>';  
  }
  snowflakeHtml += '</div>';
  return snowflakeHtml;
}

function randomFromInterval(from,to) {
  return Math.floor(Math.random()*(to-from+1)+from);
}
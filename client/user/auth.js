$(function(){
	$.extend(WorkoutLog, {
		//username & pasword variable
		var username = $("#su_username").val();
		var password = $("#su_password").val();
		//user object
		var object = {
			user: {
				username: username,
				password: password
			}
		};

		//signup post
		var signup = $.ajax({
			type: "POST",
			url: WorkoutLog.API_BASE + "user",
			data: JSON.stringfy(user),
			contentType: "application/json"
		});

		//signup done/fail
		signup.done(function(data) {
			if(data.sessionToken) {
				WorkoutLog.setAuthHeader(data.sessionToken);
			}

			$("#signup-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");

		}).fail(function() {
			$("#su_error").text("There was an issue with sign up").show();
		});

	});

	//bind events
	$("#signup").on("click", WorkoutLog.signup);
});
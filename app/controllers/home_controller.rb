class HomeController < ApplicationController

  def check_for_mobile
    session[:mobile_override] = params[:mobile] if params[:mobile]
    prepare_for_mobile if mobile_device?
  end

  def index
    if mobile_device?
      render template: + 'home/404'
    else
      render template: + 'home/index'
    end
  end
  
  def mobile_device?
    if session[:mobile_override]
      session[:mobile_override] == "1"
    else
      (request.user_agent =~ /Mobile|webOS/) && (request.user_agent !~ /iPad/)
    end
  end
  
  helper_method :mobile_device?
end

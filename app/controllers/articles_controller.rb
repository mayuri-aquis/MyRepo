class ArticlesController < ApplicationController
	
	def index
    @articles = Article.all
  end

	def new
		@article = Article.new
  	2.times do
  		@article.notes.build
  	end
  end

	def edit
	  @article = Article.find(params[:id])
	end

	def create
  	@article = Article.new(article_params)
  	if @article.save
  		redirect_to @article
  	else
  		show_errors(@article)
  	end
	end

	def update
	  @article = Article.find(params[:id])
	 
	  if @article.update(article_params)
	    redirect_to @article
	  else
	    render 'edit'
	  end
	end

	def show
    @article = Article.find(params[:id])
  end
 
	private

  def article_params
    params.require(:article).permit(:title, :text, notes_attributes: [:note])
  end

  def show_errors(src, scope=nil)
  	puts ":::::::::::::::::::::> #{src.errors.messages.inspect}"
  	src = Hash[src.errors.messages.map{|k,v| ["#{src.class.name.downcase}_#{k.to_s}", v]}]
		render 'shared/show_errors', locals: { src: src}
	end
end
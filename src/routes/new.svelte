<svelte:head>
	<title>About</title>
</svelte:head>
<style>
#category {
	    padding: 14px 20px;
    border: 1px solid #d2d1d1;
    background-color: #efefef;
    border-radius: 0;
    font-size: 14px;
    width: 100%;
}
 .submit-btn {
		margin-top: 20px;
	}
</style>
<div id="content" class="site-content container" enctype='application/json'>
	<h3>King news is no longer taking stoires</h3>
	<form action="/api/new" method="post">
	<label for="title">Title:</label>
	<input disabled type="text" id="title" name="title"><br><br>
	<label for="category">Category:</label>
	<select disabled name="category" id="category">
		<option value="Business">Business</option>
		<option value="Science">Science</option>
		<option value="Politics">Politics</option>
		<option value="Culture">Culture</option>
		<option value="Tech">Tech</option>
		<option value="World">World news</option>
	</select>
	<input type="submit" value="Submit" class='submit-btn'>
	</form>
</div>
<a href="/thanks">.</a>
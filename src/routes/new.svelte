<svelte:head>
	<title>About</title>
</svelte:head>
<style>
select {
	    padding: 14px 20px;
    border: 1px solid #d2d1d1;
    background-color: #efefef;
    border-radius: 0;
    font-size: 14px;
    width: 100%;
}
	[value="Submit"] {
		margin-top: 20px;
	}
</style>
<div id="content" class="site-content container" enctype='application/json'>
	<form action="/api/new" method="post">
	<label for="title">Title:</label>
	<input type="text" id="title" name="title"><br><br>
	<label for="category">Category:</label>
	<select name="category" id="category">
		<option value="Business">Business</option>
		<option value="Science">Science</option>
		<option value="Politics">Politics</option>
		<option value="Culture">Culture</option>
		<option value="Tech">Tech</option>
		<option value="World">World news</option>
	</select>
	<input type="submit" value="Submit">
	</form>
</div>

2. Include script in header section of the page <head></head>
How this works, the idea is the same – to detect agents that download your whole site and allow the good ones to access your site. So you should be very careful when implementing any of this methods, if you wrongly put the agent like Google in the script then your website might be blocked from indexing by Google and would not come up in the Google search results. Here is the code to block the agents: Put the code below between your <head></head> tags in your page.


<?
$agent = $_SERVER[‘HTTP_USER_AGENT’];
if(($agent == “WebCopier v.2.2”)||
($agent == “WebCopier v2.5”)||
($agent == “WebZIP/5.0 PR1 (http://www.spidersoft.com)”)|| {
header(“Location: http://www.yoursite.com/no_download.html“);
exit();
}
?>
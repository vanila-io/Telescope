var redirect = function(req, res, next)
{
  res.writeHead(301, {'Location': '/'});
  res.end();
}

WebApp.connectHandlers.use('/tutorials', redirect);
WebApp.connectHandlers.use('/view', redirect);

function tempo(request, response){
  const dynamicDate =  new Date();

  response.json({
    date: dynamicDate.toGMTSstring()
  })
}

export default tempo;
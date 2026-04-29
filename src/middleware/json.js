export async function json(req, res) {
    let body = ''

    for await(const chunk of req) {
        body +=(chunk)
    }
    try{
    req.body = JSON.parse(body)
    } catch {
        req.body = null
    }
    
    res.setHeader('Content-Type', 'application/json')
}
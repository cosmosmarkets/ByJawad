param(
  [Parameter(Mandatory = $true)]
  [string]$ToolName,
  [Parameter(Mandatory = $true)]
  [hashtable]$Arguments
)

$mcpPath = Join-Path $env:USERPROFILE ".cursor\mcp.json"
$config = Get-Content $mcpPath -Raw | ConvertFrom-Json
$key = $config.mcpServers.stitch.headers.'X-Goog-Api-Key'

$body = @{
  jsonrpc = '2.0'
  id      = [guid]::NewGuid().ToString()
  method  = 'tools/call'
  params  = @{
    name      = $ToolName
    arguments = $Arguments
  }
} | ConvertTo-Json -Depth 20 -Compress

$response = Invoke-RestMethod -Uri 'https://stitch.googleapis.com/mcp' -Method POST `
  -Headers @{ 'X-Goog-Api-Key' = $key; 'Content-Type' = 'application/json' } `
  -Body $body

if ($response.error) {
  throw ($response.error | ConvertTo-Json -Depth 10)
}

return $response

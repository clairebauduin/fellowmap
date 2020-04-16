CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
    region: 'eu-west-3'
  }
  config.fog_directory  = 'fellowmap'

  case Rails.env
    when 'production'
      config.fog_directory = 'fellowmap'
      config.asset_host = 'https://s3-eu-west-3.amazonaws.com/fellowmap'
      config.storage = :fog

    when 'development'
      config.fog_directory = 'test.fellowmap'
      config.asset_host = 'https://s3-eu-west-3.amazonaws.com/test.fellowmap'
      config.storage = :fog

    when 'staging'
      config.fog_directory = 'test.fellowmap'
      config.asset_host = 'https://s3-eu-west-3.amazonaws.com/test.fellowmap'
      config.storage = :fog

    when 'test'
      config.fog_directory = 'test.fellowmap'
      config.asset_host = 'https://s3-eu-west-3.amazonaws.com/test.fellowmap'
      config.storage = :fog
  end
end




module Jekyll
  module JSONMinifier
    def json_minify(input)
      require 'json'
      JSON.parse(input).to_json
    end
  end
end

Liquid::Template.register_filter(Jekyll::JSONMinifier)

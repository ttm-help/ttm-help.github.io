module Jekyll
  module StripHtmlWithNewlines
    def strip_html_with_newlines(input)
        return "" if input.nil?

        text = input.dup

        text.gsub!(/<iframe.*?<\/iframe>/mi, "")
        text.gsub!(/<script.*?<\/script>/mi, "")

        text.gsub!(/<br\s*\/?>/i, "\n")
        text.gsub!(/<\/p>/i, "\n")

        text.gsub!(/<\/?[^>]*>/, "")

        text.gsub!(/\n+/, "\n")
        text.strip
    end
  end
end

Liquid::Template.register_filter(Jekyll::StripHtmlWithNewlines)

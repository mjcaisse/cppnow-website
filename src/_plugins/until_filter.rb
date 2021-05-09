require 'date'

# Declare module of your plugin under Jekyll module
module Jekyll::UntilFilter

  # Each method of the module creates a custom Jekyll filter
  def until_filter(input)
    todays_date = Time.now.strftime("%F")
    if input["title"] and input['sponsors']
        sponsor_found = false # until we know different
        filtered_hash = Hash.new
        filtered_sponsors = Array.new
        input['sponsors'].each { |item|
            not_expired = true # until we know different
            if item["until"] and item["until"] >= todays_date
                sponsor_found = true
            else
                not_expired = false
            end
            if not_expired
                sponsor_found = true
                filtered_sponsors << item
            end
        }
        if sponsor_found
            filtered_hash["title"] = input["title"]
            filtered_hash["sponsors"] = filtered_sponsors
        else
            return nil
        end
        return filtered_hash
    else
        return input
    end
  end

end

Liquid::Template.register_filter(Jekyll::UntilFilter)

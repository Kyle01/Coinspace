task :get_prices => :environment do 
    puts 'Updating Prices'
    Price.doDaily
    puts 'Prices update'
end
@transactions.each do |t|
  json.set! t.id do
    json.extract! t, :price, :size, :buy, :created_at
  end
end

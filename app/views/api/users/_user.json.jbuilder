json.extract! user, :id, :username
json.transactions do 
  user.transactions.each do |transaction|
    json.partial! 'api/transactions/transaction' transaction: transaction
  end
end

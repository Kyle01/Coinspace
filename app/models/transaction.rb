class Transaction < ApplicationRecord
  validates :user_id, :price, :size, :buy, presence:true
  validate :coinValid?

  def coinValid?
    return false unless
    (:coin == "Bitcoin" ||
    :coin == "Litecoin" ||
    :coin == "Bitcoin Cash" ||
    :coin == "Ethereum")
    return true
  end

  def adjust_user_portfolio
    user = User.find(self.user_id)
    case self.coin
    when "Bitcoin"
      if self.buy
        user.update_attribute(:btc_holdings, user.btc_holdings+self.size)
      elsif user.btc_holdings >= self.size
        user.update_attribute(:btc_holdings, user.btc_holdings-self.size)
      else
        return false
      end
    when "Litecoin"
      if self.buy
        user.update_attribute(:ltc_holdings, user.ltc_holdings+self.size)
      elsif user.ltc_holdings >= self.size
        user.update_attribute(:ltc_holdings, user.ltc_holdings-self.size)
      else
        return false
      end
    when "Bitcoin Cash"
      if self.buy
        user.update_attribute(:bch_holdings, user.bch_holdings+self.size)
      elsif user.bch_holdings >= self.size
        user.update_attribute(:bch_holdings, user.bch_holdings-self.size)
      else
        return false
      end
    when "Ethereum"
      if self.buy
        user.update_attribute(:e_holdings, user.e_holdings+self.size)
      elsif user.e_holdings >= self.size
        user.update_attribute(:e_holdings, user.e_holdings-self.size)
      else
        return false
      end
    end
  end
end

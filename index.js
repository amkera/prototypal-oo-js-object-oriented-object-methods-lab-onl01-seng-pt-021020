function BoardMember(name homeState, training) {
  this.name = name; 
  this.email = email; 
  this.training = training; 
  
  User.prototype.veto = function(){
    return "No, I must disagree"
  }
  
  User.prototype.approve = function(){
    return "You can do that!"
  }
  
  User.prototype.doCharity = function(){
    return "No, I must disagree"
  }
}
<!--
 // Platform: Academy
// URL: https://academy.hackthebox.com/module/113/section/2160
// Platform Version: V1
// Module ID: 113
// Module Name: Attacking Common Applications
// Module Difficulty: Medium
// Section ID: 2160
// Section Title: Web Mass Assignment Vulnerabilities
// Page Title: Hack The Box - Academy
// Page Number: 27
-->

# Web Mass Assignment Vulnerabilities

**Module Name:** Attacking Common Applications **Page Number:** 27

#### 

#### ATTACKING COMMON APPLICATIONS

# Web Mass Assignment Vulnerabilities

``` ruby
class User < ActiveRecord::Base
  attr_accessible :username, :email
end
```

``` javascript
{ "user" => { "username" => "hacker", "email" => "hacker@example.com", "admin" => true } }
```

## Exploiting Mass Assignment Vulnerability

![https://academy.hackthebox.com/storage/modules/113/mass_assignment/pending.png](https://academy.hackthebox.com/storage/modules/113/mass_assignment/pending.png)

``` python
for i,j,k in cur.execute('select * from users where username=? and password=?',(username,password)):
  if k:
    session['user']=i
    return redirect("/home",code=302)
  else:
    return render_template('login.html',value='Account is pending for approval')
```

``` python
try:
  if request.form['confirmed']:
    cond=True
except:
      cond=False
with sqlite3.connect("database.db") as con:
  cur = con.cursor()
  cur.execute('select * from users where username=?',(username,))
  if cur.fetchone():
    return render_template('index.html',value='User exists!!')
  else:
    cur.execute('insert into users values(?,?,?)',(username,password,cond))
    con.commit()
    return render_template('index.html',value='Success!!')
```

![https://academy.hackthebox.com/storage/modules/113/mass_assignment/mass_hidden.png](https://academy.hackthebox.com/storage/modules/113/mass_assignment/mass_hidden.png)

![https://academy.hackthebox.com/storage/modules/113/mass_assignment/loggedin.png](https://academy.hackthebox.com/storage/modules/113/mass_assignment/loggedin.png)

## Prevention

``` ruby
class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email)
  end
end
```

# 

# 

#### Questions

####
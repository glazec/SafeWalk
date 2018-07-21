# SafeWalk
## api
header
Authorizaion
token .......

register/
{username,password,firstName,lastName}
{token}

change_password/
{new_password}
{}

login/
{username,password}
{}

upload_phonenum/
{phonenum}
{}

get_phonenum/
{}
{phoneum}

upload_governid/
image {governid}
{}

get_governid/
{}
{governid}

upload_avatar/
image{avatar}
{}

get_avatar/
{}
{avatar}

creat_ticket/
time{sched} //time format YYYY-MM-DD HH:MM[:ss[.uuuuuu]][TZ] 
{uuid}

ticket_confirm/
{uuid}
{first_name,last_name}
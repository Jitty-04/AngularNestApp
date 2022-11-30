import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchFriends=()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  fetchCourses=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addFriend=(dataToSend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
  addCourse=(dataToSend:any)=>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }

}

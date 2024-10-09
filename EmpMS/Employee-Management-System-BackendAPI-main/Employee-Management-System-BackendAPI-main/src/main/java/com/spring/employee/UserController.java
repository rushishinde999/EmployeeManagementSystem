package com.spring.employee;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173")

public class UserController {
  
	
	private final UserService us;
	
	public UserController (UserService  us)
	{
		this.us=us;
	}
	
	
	@PostMapping("add")
	 public  User add(@RequestBody User u)
	 {
		return us.save(u);
	 }
	
	@GetMapping("display")
	  public List <User>  show()
	{ 
		return us.display();
		}
	@DeleteMapping("/{id}")
	   
	    public String deleteUser(@PathVariable  int id)
	    {
		    us.deleteUserById(id);
		    return "user is deleted";
	};
	
}

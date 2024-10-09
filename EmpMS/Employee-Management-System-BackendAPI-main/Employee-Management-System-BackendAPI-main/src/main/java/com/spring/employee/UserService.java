package com.spring.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
 
	
	
	@Autowired
	UserRepo repo;
	
	
	public User save(User s)
	{
		return repo.save(s);
	}
	
	public List <User> display()
	{
		return repo.findAll();
		}

	public void deleteUserById(int id) {
        repo.deleteById(id);
    }
}

	
		



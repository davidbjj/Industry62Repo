package com.api.process.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.process.impl.DecathlonCalculation;
 

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DecathlonController {
	
	@GetMapping(path = "/sport/{sportName}/{mark}")
	public double getSportResultPoints(@PathVariable  String sportName, @PathVariable double mark) {
		DecathlonCalculation decathlonCalculation = new DecathlonCalculation();				
		return decathlonCalculation.calculateEvent(sportName, mark);
	}
 
}
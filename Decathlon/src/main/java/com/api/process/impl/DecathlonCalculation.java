package com.api.process.impl;

import java.util.Arrays;
import java.util.List;

import com.api.process.entity.ParamDeclathon;

public class DecathlonCalculation {
  
	private ParamDeclathon paramDeclathon;
 
	public double calculateEvent(String sportName, double mark) {		
		 double calculate = 0;
		 double result = 0;		
		 for(ParamDeclathon res: items) {
			 if (res.getEvent().equals(sportName) && res.getTypePoints().equals("sec")) {
				 calculate = res.getEventA() * (res.getEventB() - mark);
				 result = (int) Math.pow(calculate, res.getEventC());
				 break;
			 } else if (res.getEvent().equals(sportName) && !res.getTypePoints().equals("sec")) {
				 calculate = res.getEventA() * (mark - res.getEventB());
				 result = (int) Math.pow(calculate, res.getEventC());
				 break;
			 }
		 }
		return result;		
	}
	
	private List<ParamDeclathon> items = Arrays.asList(
            new ParamDeclathon("100 meters", 25.437, 18.0, 1.81, "sec"),
            new ParamDeclathon("Long Jump", 0.14354, 220, 1.40, "cm"),
            new ParamDeclathon("Shot Put", 51.39, 1.5, 1.05, "mts"),	                
            new ParamDeclathon("High Jump", 0.8465, 75, 1.42, "cm"),
            new ParamDeclathon("400 meters", 5.74352, 28.5, 1.92, "sec"),
            new ParamDeclathon("110 meters Hurdles", 5.74352, 28.5, 1.92, "sec"),	                
            new ParamDeclathon("Discus Throw", 12.91, 4.0, 1.1, "mts"),
            new ParamDeclathon("Pole Vaults", 0.2797, 100, 1.35, "cm"),
            new ParamDeclathon("Javalin Throw", 10.14, 7.0, 1.08, "mts"),
            new ParamDeclathon("1500 meters", 0.03768, 480, 1.85, "sec")
    );	
 }

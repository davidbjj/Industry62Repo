package com.api.process.entity;

public class ParamDeclathon {

	private String event;
	private double eventA;
	private double eventB;
	private double eventC;
	private String typePoints;

	public ParamDeclathon() {
	}

	public ParamDeclathon(String event, double eventA, double eventB, double eventC, String typePoints) {
		this.event = event;
		this.eventA = eventA;
		this.eventB = eventB;
		this.eventC = eventC;
		this.typePoints = typePoints;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public double getEventA() {
		return eventA;
	}

	public void setEventA(double eventA) {
		this.eventA = eventA;
	}

	public double getEventB() {
		return eventB;
	}

	public void setEventB(double eventB) {
		this.eventB = eventB;
	}

	public double getEventC() {
		return eventC;
	}

	public void setEventC(double eventC) {
		this.eventC = eventC;
	}

	public String getTypePoints() {
		return typePoints;
	}

	public void setTypePoints(String typePoints) {
		this.typePoints = typePoints;
	}

	@Override
	public String toString() {
		return "ParamDeclathon [event=" + event + ", eventA=" + eventA + ", eventB=" + eventB + ", eventC=" + eventC
				+ ", typePoints=" + typePoints + "]";
	}

}

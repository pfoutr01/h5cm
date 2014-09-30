/* 
 * The ActivityRecognizer is based on the results of the classification performed by Weka on the training set available here:
 * http://www.cis.fordham.edu/wisdm/dataset.php (specifically it is based on the dataset: WISDM_ar_v1.1_raw.txt)
 * For the classification we have used the J48 algorithm (decision tree). The current implementation includes a sub-tree 
 * transfered in JavaScript code.
 */
function ActivityRecognizer(yacceletometer, yacceletometer, zacceletometer) {
	
	var singletonContextManager = ContextManagerSingleton.getInstance("activityRecognizer");

	var activity;
	
	if (yacceletometer <= 4.1) {
		if (zacceletometer <= 3.68) {
			if (yacceletometer <= 0) {
				if (xacceletometer <= 7.82) {
					if (zacceletometer <= -4.99) {
						if (yacceletometer <= -1.116869) {
							if (yacceletometer <= -4.37) {
								if (xacceletometer <= 4.25)
									activity = "Jogging";
								else if (xacceletometer > 4.25) {
									if (yacceletometer <= -13.48) activity = "Jogging";
									else if (yacceletometer > -13.48) {
										if (xacceletometer <= 6.510526) activity = "Jogging";
										else if (xacceletometer > 6.510526) {
											if (zacceletometer <= -10.07905) {
												if (yacceletometer <= -10.65) {
													if (yacceletometer <= -12.79) activity = "Jogging";
													else if (yacceletometer > -12.79) {
														if (zacceletometer <= -15.85408) activity = "Jogging";
														else if (zacceletometer > -15.85408) activity = "Walking";
													}		
												}
												else if (yacceletometer > -10.65) activity = "Jogging";
											}
											else if (zacceletometer > -10.07905) {
												if (xacceletometer <= 6.973618) activity = "Jogging";
												else if (xacceletometer > 6.973618) {
													if (yacceletometer <= -13.29) activity = "Walking"; 
													else if (yacceletometer > -13.29) {
														if (yacceletometer <= -11.495573) activity = "Jogging";
														else if (yacceletometer > -11.495573) {
															if (yacceletometer <= -11.11) activity = "Walking"; 
															else if (yacceletometer > -11.11) activity = "Jogging";
														}
													}
												}
											}
										}
									}
								} 
							}
							else if (yacceletometer > -4.37) {
								if (xacceletometer <= -6.02) {
									if (zacceletometer <= -5.13) {
										if (zacceletometer <= -6.82) activity = "Jogging";
										else if (zacceletometer > -6.82) {
											if (xacceletometer <= -10.337844) {
												if (yacceletometer <= -4.18) {
													if (yacceletometer <= -4.249548) activity = "Jogging";
													else if (yacceletometer > -4.249548) {
														if (zacceletometer <= -5.59796) activity = "Walking";
														else if (zacceletometer > -5.59796) {
															if (xacceletometer <= -16.63) activity = "Jogging";
															else if (xacceletometer > -16.63) activity = "Upstairs";
															
														}
													}
												}
												else if (yacceletometer > -4.18) activity = "Jogging";
											}
											else if (xacceletometer > -10.337844) {
												if (xacceletometer <= -7.736358) {
													if (zacceletometer <= -5.40727) activity = "Jogging";
													else if (zacceletometer > -5.40727) {
														if (yacceletometer <= -3.02) {
															if (yacceletometer <= -4.058864) activity = "Jogging";
															else if (yacceletometer > -4.058864) {
																if (xacceletometer <= -8.47) activity = "Downstairs";
																else if (xacceletometer > -8.47) activity = "Sitting";
															}
														}
														else if (yacceletometer > -3.02) activity = "Jogging";
													}
												}
												else if (xacceletometer > -7.736358) {
													if (yacceletometer <= -1.416516) {
														if (yacceletometer <= -3.21) {
															if (zacceletometer <= -5.856749) {
																if (zacceletometer <= -6.3) activity = "Jogging";
																else if (zacceletometer > -6.3) {
																	if (xacceletometer <= -7.246025) activity = "Jogging";
																	else if (xacceletometer > -7.246025) activity = "Downstairs";
																}
															}
															else if (zacceletometer > -5.856749) {
																if (xacceletometer <= -6.319841) {
																	if (yacceletometer <= -4.29) {
																		if (xacceletometer <= -7.01) activity = "Walking";
																		else if (xacceletometer > -7.01) activity = "Sitting";
																	}
																	else if (yacceletometer > -4.29) {
																		if (zacceletometer <= -5.28) activity = "Sitting";
																		else if (zacceletometer > -5.28) {
																			if (xacceletometer <= -6.85) activity = "Sitting";
																			else if (xacceletometer > -6.85) activity = "Jogging";
																		}
																	}
																}
																else if (xacceletometer > -6.319841) activity = "Jogging";
															}
														}
														else if (yacceletometer > -3.21) {
															if (zacceletometer <= -5.557101) {
																if (yacceletometer <= -2.07) activity = "Jogging";
																else if (yacceletometer > -2.07) {
																	if (zacceletometer <= -5.747786) activity = "Jogging";
																	else if (zacceletometer > -5.747786) activity = "Upstairs";
																}
															}
															else if (zacceletometer > -5.557101) {
																if (yacceletometer <= -2.53) activity = "Walking";
																else if (yacceletometer > -2.53) {
																	if (zacceletometer <= -5.20297) activity = "Jogging";
																	else if (zacceletometer > -5.20297) {
																		if (xacceletometer <= -7.31) activity = "Jogging";
																		else if (xacceletometer > -7.31) activity = "Walking";
																	}
																}
															}
														}
													}
													else if (yacceletometer > -1.416516) {
														if (zacceletometer <= -5.856749) {
															if (xacceletometer <= -7.35) activity = "Jogging";
															else if (xacceletometer > -7.35) activity = "Sitting";
														}
														else if (zacceletometer > -5.856749) activity = "Jogging";
													}
												}
											}
										}
									}
									else if (zacceletometer > -5.13) {
										if (yacceletometer <= -3.64) {
											if (xacceletometer <= -7.886181) {
												if (xacceletometer <= -14.06) activity = "Walking";
												else if (xacceletometer > -14.06) activity = "Jogging";
											}
											else if (xacceletometer > -7.886181) {
												if (yacceletometer <= -4.058864) activity = "Jogging";
												else if (yacceletometer > -4.058864) activity = "Sitting";
											}
										}
										else if (yacceletometer > -3.64) {
											if (yacceletometer <= -1.307553) activity = "Jogging";
											else if (yacceletometer > -1.307553) activity = "Walking";
										}
									}
								}
								else if (xacceletometer > -6.02) {
									if (zacceletometer <= -8.00876) activity = "Jogging";
									else if (zacceletometer > -8.00876) {
										if (xacceletometer <= 5.75) {
											if (zacceletometer <= -5.9) {
												if (xacceletometer <= 4.821603) {
													if (zacceletometer <= -6.02) activity = "Jogging";
													else if (zacceletometer > -6.02) {
														if (xacceletometer <= 2.11) activity = "Jogging";
														else if (xacceletometer > 2.11) {
															if (yacceletometer <= -2.45) activity = "Jogging";
															else if (yacceletometer > -2.45) activity = "Walking";
														}
													}
												}
												else if (xacceletometer > 4.821603) activity = "Jogging";
											}
											else if (zacceletometer > -5.9) {
												if (xacceletometer <= 2.683209) activity = "Jogging";
												else if (xacceletometer > 2.683209) {
													if (yacceletometer <= -2.53) activity = "Jogging";
													else if (yacceletometer > -2.53) {
														if (zacceletometer <= -5.01) {
															if (zacceletometer <= -5.7) {
																if (zacceletometer <= -5.815888) activity = "Jogging";
																else if (zacceletometer > -5.815888) {
																	if (zacceletometer <= -5.788647) activity = "Walking";
																	else if (zacceletometer > -5.788647) {
																		if (zacceletometer <= -5.70692) activity = "Jogging";
																		else if (zacceletometer > -5.70692) activity = "Walking";
																	}
																}
															}
															else if (zacceletometer > -5.7) {
																if (zacceletometer <= -5.4) {
																	if (zacceletometer <= -5.40727) activity = "Jogging"; 
																	else if (zacceletometer > -5.40727) {
																		if (yacceletometer <= -1.607201) activity = "Walking";
																		else if (yacceletometer > -1.607201) activity = "Jogging"; 
																	}
																}
																else if (zacceletometer > -5.4) activity = "Jogging"; 
															}
														}
														else if (zacceletometer > -5.01) {
															if (yacceletometer <= -1.457377) {
																if (yacceletometer <= -1.879608) {
																	if (yacceletometer <= -2.179256) activity = "Jogging"; 
																	else if (yacceletometer > -2.179256) activity = "Walking";
																}
																else if (yacceletometer > -1.879608) activity = "Jogging";
															}
															else if (yacceletometer > -1.457377) activity = "Walking";
														}
													}
												}
											}
										}
										else if (xacceletometer > 5.75) {
											if (xacceletometer <= 7.354988) activity = "Jogging";
											else if (xacceletometer > 7.354988) {
												if (yacceletometer <= -3.759216) activity = "Walking";
												else if (yacceletometer > -3.759216) {
													if (yacceletometer <= -1.988571) {
														if (yacceletometer <= -2.53) {
															if (xacceletometer <= 7.65) {
																if (xacceletometer <= 7.44) activity = "Upstairs";
																else if (acceletometer > 7.44) activity = "Jogging";
															}
															else if (xacceletometer > 7.65) activity = "Upstairs";
														}
														else if (yacceletometer > -2.53) activity = "Jogging";
													}
													else if (yacceletometer > -1.988571) {
														if (zacceletometer <= -7.55) activity = "Downstairs";
														else if (zacceletometer > -7.55) {
															if (xacceletometer <= 7.463951) activity = "Jogging";
															else if (xacceletometer > 7.463951) {
																if (xacceletometer <= 7.59) activity = "Walking";
																else if (xacceletometer > 7.59) activity = "Jogging";
															}
														}
													}		
												}
											}
										}
									}
								}
							}
						}
						else if (yacceletometer > -1.116869) {
							if (xacceletometer <= -5.747787) {
								if (xacceletometer <= -7.65) {
									if (xacceletometer <= -9.80665) activity = "Jogging";
									else if (xacceletometer > -9.80665) {
										if (zacceletometer <= -6.66) activity = "Jogging";
										else if (zacceletometer > -6.66) {
											if (xacceletometer <= -8.24) {
												if (zacceletometer <= -5.36641) {
													if (yacceletometer <= -0.69) {
														if (yacceletometer <= -0.91) {
															if (yacceletometer <= -0.99) activity = "Jogging";
															else if (yacceletometer > -0.99) activity = "Upstairs";
														}
														else if (yacceletometer > -0.91) {
															if (zacceletometer <= -5.557101) activity = "Sitting";
															else if (zacceletometer > -5.557101) activity = "Downstairs"; 
														}
													}
													else if (yacceletometer > -0.69) {
														if (zacceletometer <= -6.23811) activity = "Downstairs"; 
														else if (zacceletometer > -6.23811) {
															if (yacceletometer <= -0.27) activity = "Jogging";
															else if (yacceletometer > -0.27) activity = "Upstairs";
														}
													}
												}
												else if (zacceletometer > -5.36641) {
													if (yacceletometer <= -0.53) activity = "Jogging";
													else if (yacceletometer > -0.53) {
														if (yacceletometer <= -0.38) activity = "Upstairs";
														else if (yacceletometer > -0.38) activity = "Jogging";
													}
												}
											}
											else if (xacceletometer > -8.24) {
												if (zacceletometer <= -5.979332) {
													if (yacceletometer <= -0.23) {
														if (xacceletometer <= -8.049625) {
															if (xacceletometer <= -8.158588) activity = "Sitting";
															else if (xacceletometer > -8.158588) activity = "Jogging";
														}
														else if (xacceletometer > -8.049625) activity = "Sitting";
													}
													else if (yacceletometer > -0.23) activity = "Jogging";
												}
												else if (zacceletometer > -5.979332) {
													if (xacceletometer <= -7.736358) activity = "Jogging";
													else if (xacceletometer > -7.736358) activity = "Walking";
												}
											}
										}
									}
								}
								else if (xacceletometer > -7.65) {
									if (zacceletometer <= -8.26755) {
										if (xacceletometer <= -7.31) {
											if (zacceletometer <= -9.04) {
												if (yacceletometer <= -0.72) activity = "Jogging";
												else if (yacceletometer > -0.72) activity = "Downstairs";
											}
											else if (zacceletometer > -9.04) activity = "Upstairs";
										}
										else if (xacceletometer > -7.31) activity = "Jogging";
									}
									else if (zacceletometer > -8.26755) {
										if (zacceletometer <= -5.979332) {
											if (zacceletometer <= -6.46966) {
												if (zacceletometer <= -6.85) {
													if (xacceletometer <= -7.246025) {
														if (zacceletometer <= -7.16) activity = "Jogging";
														else if (zacceletometer > -7.16) {
															if (yacceletometer <= -0.42) activity = "Sitting";
															else if (yacceletometer > -0.42) activity = "Walking";
														}
													}
													else if (xacceletometer > -7.246025) {
														if (yacceletometer <= -0.72) {
															if (xacceletometer <= -6.7) activity = "Sitting";
															else if (xacceletometer > -6.7) activity = "Jogging";
														}
														else if (yacceletometer > -0.72) activity = "Sitting";
													}
												}
												else if (zacceletometer > -6.85) {
													if (xacceletometer <= -7.01) {
														if (yacceletometer <= -0.57) activity = "Sitting";
														else if (yacceletometer > -0.57) {
															if (yacceletometer <= -0.34) activity = "Sitting";
															else if (yacceletometer > -0.34) activity = "Jogging";
														}
													}
													else if (xacceletometer > -7.01) {
														if (xacceletometer <= -6.74) activity = "Sitting";
														else if (xacceletometer > -6.74) {
															if (zacceletometer <= -6.66) {
																if (xacceletometer <= -6.13) activity = "Jogging";
																else if (xacceletometer > -6.13) activity = "Walking";
															}
															else if (zacceletometer > -6.66) activity = "Jogging";
														}
													}
												}
											}
											else if (zacceletometer > -6.46966) {
												if (yacceletometer <= -0.5) {
													if (xacceletometer <= -6.74) activity = "Sitting";
													else if (xacceletometer > -6.74) {
														if (xacceletometer <= -6.36) activity = "Jogging";
														else if (xacceletometer > -6.36) activity = "Walking";
													}
												}
												else if (yacceletometer > -0.5) {
													if (zacceletometer <= -6.047434) {
														if (xacceletometer <= -6.32) activity = "Jogging";
														else if (xacceletometer > -6.32) activity = "Upstairs";
													}
													else if (zacceletometer > -6.047434) activity = "Walking";
												}
											}
										}
										else if (zacceletometer > -5.979332) {
											if (xacceletometer <= -5.979332) activity = "Jogging";
											else if (xacceletometer > -5.979332) activity = "Walking";
										}
									}
								}
							}
							else if (xacceletometer > -5.747787) {
								if (zacceletometer <= -7.31) {
									if (xacceletometer <= 2.45) activity = "Jogging";
									else if (xacceletometer > 2.45) {
										if (xacceletometer <= 7.4) activity = "Jogging";
										if (xacceletometer > 7.4) {
											if (zacceletometer <= -7.8) activity = "Upstairs";
											else if (zacceletometer > -7.8) activity = "Jogging";
										}
									}
								}
								else if (zacceletometer > -7.31) {
									if (zacceletometer <= -5.20297) {
										if (xacceletometer <= 6.932757) {
											if (xacceletometer <= 4.440233) {
												if (xacceletometer <= -3.17) {
													if (xacceletometer <= -4.44) {
														if (yacceletometer <= -0.8) activity = "Jogging";							
													}
													else if (xacceletometer > -4.44) activity = "Jogging";	
												}
												else if (xacceletometer > -3.17) {
													if (zacceletometer <= -6) {
														if (zacceletometer <= -6.047434) {
															if (zacceletometer <= -6.319841) activity = "Jogging";
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	else if (yacceletometer > 4.1) {
		if (yacceletometer <= 10.42) {
			if (zacceletometer <= 3.79) {
				if (yacceletometer <= 9.193735) {
					if (xacceletometer <= -4.52) {
						if (xacceletometer <= -8.962189) {
							if (zacceletometer <= -5.979332) {
								if (xacceletometer <= -10.72) activity = "Jogging";
								else if (xacceletometer > -10.72) {
									if (zacceletometer <= -9.34355) {
										if (yacceletometer <= 4.67) {
											if (xacceletometer <= -10.269742) activity = "Downstairs";
											else if (xacceletometer > -10.269742) activity = "Jogging";
										}
										else if (yacceletometer > 4.67) activity = "Jogging";
									}
									else if (zacceletometer > -9.34355) {
										if (xacceletometer <= -9.7) activity = "Jogging";
									}
								}
							}
						}
					}
				}
			}
		}
		else if (yacceletometer > 10.42) {
			if (yacceletometer <= 16.93) {
				if (xacceletometer <= -10.61) {
					if (xacceletometer <= -13.78) activity = "Jogging";
					if (xacceletometer > -13.78) {
						if (xacceletometer <= -12.11) activity = "Jogging";
					}
				}
			}
			else if (yacceletometer > 16.93) {
				if (yacceletometer <= 19.53) {
					if (xacceletometer <= -13.1) {
						if (zacceletometer <= 7.1643) {
							if (zacceletometer <= -11.5) {
								if (xacceletometer <= -15.83) {
									if (yacceletometer <= 17.583868) {
										if (yacceletometer <= 16.970953) activity = "Walking";
										else if (yacceletometer > 16.970953) activity = "Jogging";
									}
								}
							}
						}
					}
				}
			}
		}
	}

	if (activity === undefined) {
		activity = "Walking";
	}
	
	var timer = setTimeout(function () {
		singletonContextManager.activityRecognizer.activityRecognizer = activity;	
		document.dispatchEvent(singletonContextManager.activityRecognizerContextValueEvent);
		console.log( "ActivityRecognizer is fired -> Requested activityRecognizer is returned." );
	}, 100);
}
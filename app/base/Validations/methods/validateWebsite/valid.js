const isValid = time =>
	/* eslint-disable-next-line */
	/^((ht|f)tp(s?)\:\/\/|~\/|\/)?(\w+:\w+@)?(([-\w]+\.)+(com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|travel|moda|[a-z]{2}))(:[\d]{1,5})?(((\/([-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?((\?([-\w~!$+|.,*:]|%[a-f\d{2}])+=([-\w~!$+|.,*:=]|%[a-f\d]{2})*)(&([-\w~!$+|.,*:]|%[a-f\d{2}])+=([-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(#([-\w~!$+|.,*:=]|%[a-f\d]{2})*)?$/gi
		.test(time);

export { isValid };

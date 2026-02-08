import os

with open('yes.txt', 'w') as file:
	for i in range(40):
		file.write(f"<tr>\n\
	<td><input type='text'></td>\n\
	<td>\n\
		<select class='grade' name='grade_{i}' id='grade_{i}'>\n\
			<div w3-include-html='select_grade.html'></div>\n\
		</select>\n\
	</td>\n\
	<td>\n\
		<select class='weight' name='weight_{i}' id='weight_{i}'>\n\
			<div w3-include-html='select_weight.html'></div>\n\
		</select>\n\
	</td>\n\
</tr>\n\n") 
function load_example(s,m,r){
    s_editor.value = s;
    map_editor.value = m;
    reduce_editor.value = r;
}

var example2 = [@"
function(input){
  return [
    'aaaa',
    'bbbb',
    'cccc',
    'dddd'
  ];
}
",
"This is the map function",
"This is the reduce function!!",
]

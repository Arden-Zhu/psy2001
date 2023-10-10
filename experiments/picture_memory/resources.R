
file_names <- list.files("posts/6_picture_memory/images/")


rio::export(file_names,'posts/6_picture_memory/stimuli.js',format='JSON')

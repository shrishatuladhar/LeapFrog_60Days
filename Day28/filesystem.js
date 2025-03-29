const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File created and saved!');

  // Read the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // Append to the file
    fs.appendFile('example.txt', '\nHello, again!', (err) => {
      if (err) throw err;
      console.log('Content appended!');

      // Rename the file
      fs.rename('example.txt', 'newname.txt', (err) => {
        if (err) throw err;
        console.log('File renamed!');

        // Delete the file
        fs.unlink('newname.txt', (err) => {
          if (err) throw err;
          console.log('File deleted!');

          // Create a directory
          fs.mkdir('newdir', (err) => {
            if (err) throw err;
            console.log('Directory created!');

            // Read the directory
            fs.readdir('newdir', (err, files) => {
              if (err) throw err;
              console.log('Directory content:', files);

              // Rename the directory
              fs.rename('newdir', 'renameddir', (err) => {
                if (err) throw err;
                console.log('Directory renamed!');

                // Delete the directory
                fs.rmdir('renameddir', (err) => {
                  if (err) throw err;
                  console.log('Directory deleted!');
                });
              });
            });
          });
        });
      });
    });
  });
});

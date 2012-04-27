outfile = File.open("parsedQuotes.js", "w");

File.open("rawQuotes.txt", "r") do |infile|
  outfile.write("var quotes = [\n")

  while (line = infile.gets)
    # clear out the lines that are most likely not actual quotes.
    # this is insufficient, and requires some editing for the actual
    # quotes to be correct
    unless line.chomp.length < 20 || 
      line.match(/\[edit\]|ISSN|ISBN|(q|Q)uote/) ||
      line.match(/\d{1,2}\ \w{3,9}\ \d{4}/) ||
      line.match(/(p|Vol)\.\ \d+/) || line.match(/^Ch(\.)?(apter)?\ \d+/) ||
      line.match(/\(.*\d{4}\)/) ||
      outfile.write("\"" + line.chomp.gsub(/\"/, %q|\"|) + "\",\n\n")
    end
  end

  outfile.write("\n]")
  outfile.write("\nmodule.exports.quotes = quotes;");
end

outfile.close

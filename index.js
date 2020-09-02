exports.eval = async function(index) {
const evaled = await eval(index).catch(err => String(err));
return evaled;
}

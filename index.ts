
function decim( num: number ): string {
  const numForm: number = Math.trunc( num );
  if( numForm === 0 ) return '';

  return decim( numForm/2 ) + ( numForm%2 ).toString();
}

const a = decim( parseInt(process.argv[2]) );
console.log( a );
// console.log( decim( 10, '' ) );
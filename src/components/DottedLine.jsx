export default function DottedLine({ orientation = 'horizontal', length = '100%', color = '#000', thickness = 1, style }) {
  const common = {
    borderColor: color,
    borderStyle: 'dotted',
  };

  return orientation === 'vertical' ? (
    <div
      style={{
        width: `0px`,
        height: length,
        borderLeftWidth: thickness,
        ...common,
        ...style,
      }}
      
    />
  ) : (
    <div
      style={{
        height: `0px`,
        width: length,
        borderBottomWidth: thickness,
        ...common,
        ...style,
      }}
    />
  );
}
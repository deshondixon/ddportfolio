flex items-center p-2space-x-7'>
      <Icon className='w-16 h-16' />
      <div className='items-center'>
        <Text
          size={18}
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          weight='bold'
          className='text-3xl font-medium tracking-wider text-white'
        >
          {title}
        </Text>
        <Text
          dangerouslySetInnerHTML={createMarkup()}
          size={14}
          weight='extrabold'
          className='text-3xl font-medium tracking-wide'
          css={{
            color: 'gray100',
          }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;

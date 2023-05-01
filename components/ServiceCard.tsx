
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

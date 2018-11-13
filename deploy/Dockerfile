FROM phusion/passenger-nodejs

ENV NODE_ENV production
ENV HOME /home/app/webapp

WORKDIR ${HOME}

# Bundle app source
COPY --chown=app:app . .

RUN rm -rf /etc/nginx/sites-enabled/default
RUN rm -f /etc/service/nginx/down
ADD deploy/webapp.conf /etc/nginx/sites-enabled/webapp.conf
RUN npm install --only=production
RUN chown -R app:app /home/app
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80

CMD ["/sbin/my_init"]
